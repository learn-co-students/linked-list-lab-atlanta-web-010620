function getName(node){
    return node.name;
}

function headNode(string, list){
    return list[string]; 
}

function next(string, collection){
    return collection[string.next]
}

function nodeAt(num, string, list){
    let node = headNode(string, list);  
    for (let i = 0; i < num; i++){
        if (node.next !== null){
            node = next(node, list); 
        }
    }
    return node; 
}

function addressAt(num, string, list){ 
    if (num === 0){
        return string; 
    }else{
        return nodeAt(num-1,string,list).next;
    }
}

function indexAt(node, list, string){
    let currentNode = headNode(string,list); 
    let id = 0; 
    while (currentNode !== node){
        currentNode = next(currentNode, list); 
        id +=1; 
    }
    return id; 
}

function insertNodeAt(index, name, string, list){
    let beforeNode = nodeAt(index-1, string, list); 
    let beforeNodesNext = beforeNode.next; 
    beforeNode.next = name; 
    list[name].next = beforeNodesNext;
}

function deleteNodeAt(index, string, list){
    let beforeNode = nodeAt(index-1, string, list); 
    let nodeToDelete = nodeAt(index, string, list); 
    beforeNode.next = nodeToDelete.next; 
}