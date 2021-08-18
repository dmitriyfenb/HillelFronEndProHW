let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = Math.floor(Math.random() * 6 + 1);
        if (1 <= number <= 5) {
            console.log('Start the game...');
            resolve(number);
        } else reject('Game over');
    }, 2000);
});

async function startPromise() {
    try {
        let num = await promise;
        if (num === 1) {
            console.log('Stay here');
        } else console.log(`Go ${num} steps`);
    } catch (error) {
        console.error(error);
    }
}

startPromise()