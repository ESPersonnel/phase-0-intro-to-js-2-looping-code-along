// Code your solutions in this file

// writeCards()
//       1) returns an array of thank you messages for each name provided to the function
//     countDown()
//       2) invokes console.log once for each number, counting down from the number provided to zero
//       3) logs each number when counting down, starting from the number provided

const writeCards = (names) => {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}

const countDown = (num) => {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}