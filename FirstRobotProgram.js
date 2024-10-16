async function startProgram() {
	setStabilization(true);
	setMainLed({ r: 255, g: 43, b: 48 });
	await roll(0, 100, 1);
	await delay(1);
	setMainLed({ r: 255, g: 157, b: 38 });
	await roll(180, 100, 2);
	await delay(1);
	setMainLed({ r: 228, g: 255, b: 0 });
	await roll(0, 100, 1);
	await delay(1);
	await roll(90, 100, 1);
	await delay(1);
	setMainLed({ r: 229, g: 145, b: 255 });
	await roll(270, 100, 2);
	await delay(1);
	setMainLed({ r: 18, g: 99, b: 255 });
	await roll(90, 100, 1);
	await delay(1);
	setMainLed({ r: 48, g: 255, b: 9 });
	await speak('Pretty good, right?', false);
}
