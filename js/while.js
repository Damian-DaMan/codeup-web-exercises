// Create a while loop that uses console.log()
// let i = 2;
// while (i <= 65536) {
//     console.log(i)
//     i = i * 2
// }

function doubleInput(num) {
    while(true) {
        console.log(num);
        num * 2;
        if(num > 66000); break;
    }
}
doubleInput();



// DO WHILE

// Write enough code that generates a reandom number from 50 to 100

function sellMycones() {
    let allcones = Math.floor(Math.random() * 50) + 50;
    do {
        const customerCones = Math.floor(Math.random() * 5) + 1;
        if(allCones - customerCones < 0) {
            console.log(`I can't sell ${customerCones} cones, I only have ${allcones}`);
            continue;
        } else if(allCones - customerCones === 0) {
            console.log('Yay! I sold them all!');
            break;
        } else {
            console.log(`${customerCones} cones sold. `);
            allCones -= customerCones
        }
        console.log(`I now have ${allcones} cones left`);
    } while(allCones > 0);
}

sellMycones();


