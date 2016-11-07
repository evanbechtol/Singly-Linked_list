/**
 * Created by eevabec on 11/5/2016.
 */
var Node = require(__dirname + '/nodes.js');
var List = require(__dirname + '/linkedList.js');
var myList = new List();

console.log(('Attempting to remove non-existent node: ' + JSON.stringify(myList.remove(2), null, 4)));

myList.insert(new Node(myList.length + 1, {
    firstName: 'Evan',
    lastName: 'Bechtol',
    age: 27
}));
myList.insert(new Node(myList.length + 1, {
    firstName: 'Taylor',
    lastName: 'Bechtol',
    age: 25
}));
myList.insert(new Node(myList.length + 1, {
    firstName: 'Alex',
    lastName: 'Bechtol',
    age: 22
}));
myList.insert(new Node(myList.length + 1, {
    firstName: 'Kari',
    lastName: 'Bechtol',
    age: 50
}));
myList.insert(new Node(myList.length + 1, {
    firstName: 'Clay',
    lastName: 'Bechtol',
    age: 50
}));
console.log('List length: ' + myList.getLength());
//console.log('Tail: ' + JSON.stringify(myList.getTail(), null, 4));
//console.log('Head: ' + JSON.stringify(myList.getHead(), null, 4));
//console.log('Searching for node 2: ' + JSON.stringify(myList.searchById(2), null, 4));
console.log('Removing node 1: ' + JSON.stringify(myList.remove(1), null, 4));
console.log('Removing node 3: ' + JSON.stringify(myList.remove(3), null, 4));
console.log('Removing node 3: ' + JSON.stringify(myList.remove(3), null, 4));
console.log('List length: ' + myList.length);
console.log(JSON.stringify(myList, null, 4));