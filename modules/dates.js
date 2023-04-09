const UnixF = {
	/**
	 * Convert from unix timestamp to date.
	 * @param {number} timestamp The unix timestamp.
	 * @param {string} format The format of the date:
	 * * use 'd' for date, 'm' for month and 'yy' for year, double that to get the extended value
	 * * any non-consecutive repeated special letters may cause bugs
	 * * for example, toDate(1, 'yy.mm/a-d') will return '70.01/a-1'
	 * @return {string} The date
	 */
	ToDate: (timestamp, format = 'dd/mm/yyyy') => {
		let date = new Date(timestamp);
		let result = '';
		let val = {
			date: date.getDate(),
			month: date.getMonth() + 1,
			year: date.getFullYear()
		};
		if (format.indexOf('dd') != -1) {
			format = format.replace('d', '');
			if (val.date < 10) {
				val.date = '0' + val.date;
			}
		}
		if (format.indexOf('mm') != -1) {
			format = format.replace('m', '');
			if (val.month < 10) {
				val.month = '0' + val.month;
			}
		}
		if (format.indexOf('yyyy') != -1) {
			format = format.replace('yyy', '');
		}
		else if(format.indexOf('yy') != -1) {
			val.year %= 100;
			format = format.replace('y', '');
		}
		for (const char of format) {
			switch (char) {
				case 'd':
					result += val.date;
					break;
				case 'm':
					result += val.month;
					break;
				case 'y':
					result += val.year;
					break;
				default:
					result += char;
					break;
			}
		};
		return result;
	},
	/**
	 * Convert from unix timestamp to time.
	 * @param {number} timestamp The unix timestamp.
	 * @param {string} format The format of the time:
	 * * use 's' for seconds, 'm' for minutes and 'h' for hours, double that to get the extended value
	 * * any non-consecutive repeated special letters may cause bugs
	 * * for example, toTime(5, 'hh.mm/a-s') will return '' IN THE GMT TIMEZONE
	 * @return {string} The date
	 */
/* 	ToTime: (timestamp, format = 'hh:mm:ss') => {
		let time = new Date(timestamp);
		console.log(time);
		let result = '';
		let val = {
			seconds: time.getSeconds(),
			minutes: time.getMinutes(),
			hours: time.getHours()
		};
		console.log(val);
		if (format.indexOf('ss') != -1) {
			format = format.replace('s', '');
			if (val.seconds < 10) {
				val.seconds = '0' + val.seconds;
			}
		}
		if (format.indexOf('mm') != -1) {
			format = format.replace('m', '');
			if (val.minutes < 10) {
				val.minutes = '0' + val.minutes;
			}
		}
		if (format.indexOf('hh') != -1) {
			format = format.replace('h', '');
			if (val.hours < 10) {
				val.hours = '0' + val.hours;
			}
		}
		for (const char of format) {
			switch (char) {
				case 's':
					result += val.seconds;
					break;
				case 'm':
					result += val.minutes;
					break;
				case 'h':
					result += val.hours;
					break;
				default:
					result += char;
					break;
			}
		};
		return result;
	}, */
	/**
	 * Convert from unix timestamp to week day.
	 * @param {number} timestamp The unix timestamp.
	 * @param {string} format The format of the day:
	 * * 'f' or 'full' (default) for the full day name or the number of letters you want to output
	 * @return {string} The week day
	 */
	ToWeekDay: (timestamp, l = -1) => {
		let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		if (l == -1) {
			return days[new Date(timestamp).getDay()];
		}
		else if(l >= 0) {
			return days[new Date(timestamp).getDay()].slice(0, l);
		}
	}
}