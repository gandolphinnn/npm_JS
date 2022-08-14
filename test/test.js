class Game {
	constructor(player) {
		this.player = player;
		this.gameObj = new Array();
	}
	awake() {
		this.gameObj.forEach(obj => {
			if (mathF.parentClass(obj) == 'RigidRect')
				obj.calcCorners();
		});
	}
	backend() {
		this.player.move();
		if (mathF.parentClass(this.player) == 'RigidRect')
			this.player.calcCorners();
	}
	frontend() {
		this.player.showHitbox();
		this.gameObj.forEach(obj => {
			obj.draw();
		});
		this.gameObj.forEach(obj => {
			let hitPoints = rigidF.collision(this.player, obj)
			console.log(hitPoints);
			if (hitPoints) {
				hitPoints.forEach(point => {
					drawF.circle(point, 5);
				});
			}
		});
	}
	addObj(obj) {
		this.gameObj.push(obj)
	}
}
class Player extends RigidCirc{
	constructor() {
		//super(new Coord(105, 105), 0, 100, 100); //rect
		super(new Coord(400, 105), 0, 50, 50); //circ
	}
	draw() {
		this.showHitbox();
	}
	move() {
		if (key.KW)
			this.coord.y -= 5;
		if (key.KA)
			this.coord.x -= 5;
		if (key.KS)
			this.coord.y += 5;
		if (key.KD)
			this.coord.x += 5;
		if (key.KE)
			this.degr -= 5;
		if (key.KQ)
			this.degr += 5;
	}
}
class Rect extends RigidRect {
	constructor() {
		super(new Coord(150, 150), 30, 200, 200, 'red');
	}
	draw() {
		this.showHitbox();
	}
}
class Circ extends RigidCirc {
	constructor() {
		super(new Coord(500, 500), 0, 60);
	}
	draw() {
		this.showHitbox();
	}
}
let game = new Game(new Player());
game.addObj(new Rect());
//game.addObj(new Circ());
animate(game);