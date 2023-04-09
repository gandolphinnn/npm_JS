class GameObject2 {
	constructor(position = new Vector2(), rotation = new Vector2(), dimension = new Vector2()) {
		this.position = position;
		this.rotation = rotation;
		this.dimension = dimension;
		this.components = new Array();
	}
	Start() {
		this.components.forEach(component => {
			component.Start();
		});
	}
	Update() {
		this.components.forEach(component => {
			component.Start();
		});
	}
	AddComponent(component) {
		this.components.push(component);
	}
};
class Component {
	Start() {}
	Update() {}
}
function parentClass (obj) {
	return typeof obj == 'object'? Object.getPrototypeOf(obj.constructor).name : false;
}