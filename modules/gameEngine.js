class GameEngine {
	constructor(camera2 = new Camera2()) {
		this.camera = camera2;
		this.gameObjs = new Array();
		this.Start();
	}
	Start() {
		this.gameObjs.forEach(gameObj => {
			gameObj.Start();
		});
		this.Update();
	}
	Update() {
		ctx.clearRect(0, 0, innerWidth, innerHeight);
		this.gameObjs.forEach(gameObj => {
			gameObj.Update();
		});
		requestAnimationFrame(this.Update());
	}
	addObj(obj) {
		this.gameObjs.push(obj)
	}
}
let game = new GameEngine();