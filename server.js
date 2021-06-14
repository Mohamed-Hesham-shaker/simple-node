function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    while (true) {
        console.log('Deployed');
        await sleep(5000);
    }
}

main();