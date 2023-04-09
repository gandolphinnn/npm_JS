//#region //! dont touch
let canvas = document.querySelector("canvas");
canvas.width = typeof cnvWidth === 'undefined'? window.innerWidth : cnvWidth;
canvas.height = typeof cnvHeight === 'undefined'? window.innerHeight : cnvHeight;
document.querySelector('body').style.overflow = 'hidden';
document.querySelector('body').style.margin = '0px';
ctx = canvas.getContext("2d");
//#endregion
class Camera2 extends GameObject2 {
	constructor(position = new Vector2(0, 0), dimension = new Vector2(canvas.width, canvas.height)) {
		super(position, new Vector2(), dimension)
		this.center = () => {
			return new Vector2(this.dimension.x/2, this.dimension.y/2,)
		}
	}
}
class Vector2 {
	constructor(x = 0, y = 0, direction = 0) {
		this.x = x;
		this.y = y;
		this.direction = direction;
	}
	set(newX, newY) {
		this.x = newX;
		this.y = newY;
	}
	inc(addX, addY) {
		this.x += addX;
		this.y += addY;
	}
	distance(vector2) {
		return Math.sqrt((this.x - vector2.x) ** 2 + (this.y - coord.y )** 2);
	}
};
class Line2 {
	constructor(vector2A = new Vector2(), vector2B = new Vector2()) {
		this.pointA = vector2A;
		this.pointB = vector2B;
	}
	hitL(line2) {
		//todo(?) add exception: overlayered lines
		let denom = (this.pointA.x-this.pointB.x)*(line2.pointA.y-line2.pointB.y)-(line2.pointA.x-line2.pointB.x)*(this.pointA.y-this.pointB.y);
		let t = ((this.pointA.x-line2.pointA.x)*(line2.pointA.y-line2.pointB.y)-(line2.pointA.x-line2.pointB.x)*(this.pointA.y-line2.pointA.y))/denom;
		let u = ((this.pointA.x-line2.pointA.x)*(this.pointA.y-this.pointB.y)-(this.pointA.x-this.pointB.x)*(this.pointA.y-line2.pointA.y))/denom;
		if (t >= 0 && t <= 1 && u >= 0 && u <= 1)
			return new Vector2(this.pointA.x + t * (this.pointB.x - this.pointA.x), this.pointA.y + t * (yB - this.pointA.y));
		else
			return false;
	}
};
const drawF = {
	clear: () => {
		ctx.clearRect(0, 0, innerWidth, innerHeight);
	},
	circle: (vector2, radius, action = '') => {
		ctx.beginPath();
		ctx.arc(vector2.x, vector2.y, radius, 0, Math.PI * 2);
		if (action == '' || action == 'fill' || action == 'f')
			ctx.fill();
		if (action == '' || action == 'stroke' || action == 's')
			ctx.stroke();
	},
	rectV: (vector2, width, length, action = '') => { //? rect with lines parallel to screen
		ctx.beginPath();
		ctx.rect(vector2.x, vector2.y, width, length);
		if (action == '' || action == 'fill' || action == 'f')
			ctx.fill();
		if (action == '' || action == 'stroke' || action == 's')
			ctx.stroke();
	},
	rectC: (vector2A, vector2B, action = '') => { //? rect with lines parallel to screen
		ctx.beginPath();
		let x = (vector2B.x < vector2A.x)? vector2B.x : vector2A.x;
		let y = (vector2B.y < vector2A.y)? vector2B.y : vector2A.y;
		let w = Math.abs(vector2A.x-vector2B.x);
		let h = Math.abs(vector2A.y-vector2B.y);		
		ctx.rect(x, y, w, h);
		if (action == '' || action == 'fill' || action == 'f')
			ctx.fill();
		if (action == '' || action == 'stroke' || action == 's')
			ctx.stroke();
	},
	/**
	 * Draw a line between 2 points
	 * @param {Vector2} vector2A The starting point.
	 * @param {Vector2} vector2A The ending point:
	 */
	line: (vector2A, vector2B) => {
		ctx.beginPath();
		ctx.moveTo(vector2A.x, vector2A.y);
		ctx.lineTo(vector2B.x, vector2B.y);
		ctx.stroke();
	},
	/**
	 * Show a variety of lengths for debug purpuses
	 * @param {number} unit custom length to show, default 0
	 */
	units: (unit = 0) => {
		drawF.clear();
		let lineL = [1, 5, 10, 50, 100, 250, 500, 1000];
		if (unit > 0 && unit < cnv.width && !lineL.includes(unit)) {
			lineL.push(unit);
			lineL.sort(function(a, b) {
				return a - b;
			});
		}
		let vector2 = new Vector2(canvas.innerHeight-500, canvas.innerWidth.y-(20*lineL.length/2));
		ctx.lineWidth = 4;
		lineL.forEach(l => {
			if (l == unit)
				ctx.strokeStyle = 'red';
			else
				ctx.strokeStyle = 'black';
			ctx.fillText(l, vector2.x - 30, vector2.y+3)
			drawF.line(vector2, vector2F.sumVal(vector2, l, 0));
			vector2.inc(0, 20);
		});
	}
};