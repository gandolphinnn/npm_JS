const MathF = {
	normalize: (degr) => {
		degr %= 360;
		while (degr < 0) degr += 360;
		return degr;
	},
	toDegr: (rad) => {
		return MathF.normalize(rad * 180 / Math.PI)
	},
	toRad: (degr) => {
		return MathF.normalize(degr) * Math.PI / 180;
	},
	rand: (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	rand0: (max) => {
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - 1));
	},
	last: (arr) => {
		if (!Array.isArray(arr)) {
			return false;
		}
		return arr[arr.length-1];
	},
	cosD: (degr) => {
		return Math.cos(MathF.formA(degr, 'rad'));
	},
	sinD: (degr) => {
		return Math.sin(MathF.formA(degr, 'rad'));
	}
}