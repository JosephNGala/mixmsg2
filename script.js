
// Week 6 Group Project: Mixed Messages by tinisha, oscar, michelle, julio, imani

const suspectedElements = {
    whoDoneIt: ['Miss Scarlett', 'Professor Plum', 'Mrs. Peacock', 'Colonel Mustard', 'Mrs. White', 'Mr. Green'],
    whereItDone: ['ballroom', 'billiard room', 'conservatory', 'dining room', 'hall', 'kitchen', 'library', 'lounge', 'study'],
    whatDoneIt: ['candlestick', 'knife', 'lead pipe', 'revolver', 'rope', 'wrench']
};
let accusation = [];
let randomSelect = arrayLength => {
    return Math.floor(Math.random() * arrayLength);
}


console.log(suspectedElements);
console.log(randomSelect(suspectedElements.whoDoneIt));
