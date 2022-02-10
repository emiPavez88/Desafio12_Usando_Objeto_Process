const getRandomNumbers = (cant) => {
    let numbers = [];

    for (let i = 0; i < cant; i++) {
        let numRandom = Math.floor(Math.random() * (1000 - 1) + 1);

        if (numbers[numRandom.toString()]) {
			numbers[numRandom.toString()]++;
		} else {
			numbers[numRandom.toString()] = 1;
		}
    }

    return numbers;
};

process.on("message", (message) => {

    const numbers = getRandomNumbers(message.cant);

	process.send(numbers);
	process.exit();
    
});

process.send("ok");