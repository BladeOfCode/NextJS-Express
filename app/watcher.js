function Sleep(milis) {
    const date = new Date();
    while (1) {
        const time = new Date();
        if (time - date > milis) break;
    }
}

function init() {
    while (1) {
        Sleep(5000);
        console.log("Time is flying like an arrow!");
    }
}

module.exports = {init}