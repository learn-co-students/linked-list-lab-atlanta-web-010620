function getName(node) {
    return node.name
}

function headNode(index, list) {
    return list[index]
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(index, head, collection) {
    let node = collection[head]
    for (let i = 0; i < index; i++) {
        node = next(node, collection)
    }
    return node
}

function addressAt(index, head, collection) {
    let address = head
    for (let i = 0; i < index; i++) {
        address = collection[address].next
    }
    return address
}

function indexAt(target, collection, head) {
    let index = 0
    let node = collection[head]
    while (node !== target) {
        index += 1
        node = next(node, collection)
    }
    return index
}

function insertNodeAt(index, address, head, collection) {
    let previousNode = collection[head]
    let nextNode = next(previousNode, collection)
    let newNode = collection[address]
    for (let i = 1; i < index; i++) {
        previousNode = nextNode
        nextNode = next(previousNode, collection)
    }
    newNode.next = previousNode.next
    previousNode.next = address
}

function deleteNodeAt(index, head, collection) {
    let previousNode = collection[head]
    let nextNode = next(previousNode, collection)
    for (let i = 1; i < index; i++) {
        previousNode = nextNode
        nextNode = next(previousNode, collection)
    }
    previousNode.next = nextNode.next
}