/**
 * Created by eevabec on 11/5/2016.
 */
function LinkedList () {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
    console.log('list created');
}

function validateIndex(index, length) {
    if (this.length === 0 || index < 1 || index > length) {
        throw {error: 'Node with id ' + index + ' not found.'};
    }
    return true;
}

LinkedList.prototype.getHead = function () {
    return this.head;
};

LinkedList.prototype.getLength = function () {
    return this.length;
};

LinkedList.prototype.getTail = function () {
    return this.searchById(this.tail.id);
};

LinkedList.prototype.insert = function (node) {
    if (this.length){
        this.tail.next = node;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
    this.length++;
    return node;
};

LinkedList.prototype.update = function (node) {

};

LinkedList.prototype.remove = function (index) {
    try {
        validateIndex(index, this.length);
        var currentNode = this.head,
            count = 1, result = undefined;

        if (index === 1) {
            result = delete this.head;
            this.head = currentNode.next;
            this.length--;

        } else if (index === this.length) {

            result = delete this.tail;
            this.tail = this.searchById(this.length - 1);
            this.tail.next = null;
            this.length--;

        } else {
            var previousNode = followingNode = currentNode = this.head;
            count = 1;
            console.log(this.searchById(index));
            if (!this.searchById(index).hasOwnProperty('error')) {
                while (count < index) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                    followingNode = currentNode.next;
                    count++;
                }
                currentNode.next = undefined;
                previousNode.next = followingNode;
                this.length--;
            }
        }

        return result;
    } catch (e) {
        return e;
    }
};

LinkedList.prototype.searchById = function (index) {
    try {
        validateIndex(index, this.length);
        var currentNode = this.head,
            count = 1;

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
    } catch (e) {
        return e;
    }

    return currentNode;
};


module.exports = LinkedList;
