let Hand = require('pokersolver').Hand;



// var hand1 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', '3c', 'Kd']);
// var hand2 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', 'Qs', 'Qd']);
// var winner = Hand.winners([hand1, hand2]); // hand2

// console.log(winner);

var hand = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', 'Qs', 'Qd']);
console.log(hand.name); // Two Pair
console.log(hand.descr); // Two Pair, A's & Q's