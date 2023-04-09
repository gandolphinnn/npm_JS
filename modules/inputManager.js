let inspectVar; //? to use to inspect an object when you press a mouse button
let Input = {
	mouse : {
		pos: new Vector2(),
		scroll: {
			x : 0,
			y : 0,
		},
		btn: {
			l: false,
			m: false,
			r: false
		}
	},
	key : {},
	allowF5F12: true //? allow to refresh and to open the page inspect
};
//#region Mouse
	document.addEventListener('contextmenu', e => e.preventDefault()); //? prevent right click menu
	document.addEventListener('wheel', e => {
		Input.mouse.scroll.x = (e.deltaY / 100 == -0)? 0: e.deltaY / 100;
		Input.mouse.scroll.y = (e.deltaX / 100 == -0)? 0: e.deltaX / 100;
	})
	document.addEventListener('mousedown', e => {
		switch (e.button) {
			case 0: Input.mouse.btn.l = true; break;
			case 1: Input.mouse.btn.m = true; e.preventDefault(); break; //? prevent middle click scroller
			case 2: Input.mouse.btn.r = true; break;
			default: break;
		}
		if (inspectVar != undefined) {
			console.log(inspectVar);
		}
	})
	document.addEventListener('mouseup', e => {
		switch (e.button) {
			case 0: Input.mouse.btn.l = false; break;
			case 1: Input.mouse.btn.m = false; break;
			case 2: Input.mouse.btn.r = false; break;
			default: break;
		}
	})
	document.addEventListener('mousemove', e => {
		Input.mouse.pos.y = e.clientY;
		Input.mouse.pos.x = e.clientX;
	});
//#endregion
//#region Keys
	document.addEventListener('keydown', e => {
		if (!(Input.allowF5F12 && (e.code == 'F5' || e.code == 'F12')))
			e.preventDefault() 
		Input.key[e.code.replace('Key', 'K').replace('Digit', 'D').replace('Numpad', 'P').replace('Arrow', '')] = true;
	});
	document.addEventListener('keyup', e => {
		Input.key[e.code.replace('Key', 'K').replace('Digit', 'D').replace('Numpad', 'P').replace('Arrow', '')] = false;
	});
//#endregion