//Print the elements of a linked list
function printLinkedList(head) {
	while (head) {
		console.log(head.data);
		head = head.next;
	}
}

//insert a node at the tail of a linked list
function insertNodeAtTail(head, data) {
	if (!head) {
		head = new SinglyLinkedListNode(data, null);
		return head;
	}
	let current = head;
	while (current.next) {
		current = current.next;
	}
	current.next = new SinglyLinkedListNode(data, null);
	return head;
}

//insert node at the head of a linked list
function insertNodeAtHead(head, data) {
    let newHead = new SinglyLinkedListNode(data, null);
    newHead.next = head;
    head = newHead;
    return head;

}

//insert node at a specific position in a linked list
function insertNodeAtPosition(head, data, position) {
	if (!head || position == 0) {
		head = new SinglyLinkedListNode(data, null);
		return head;
	}
    let current = head;
    let i = 1;
	while (current) {
        if(i === position){
        const node = new SinglyLinkedListNode(data, null);
        node.next = current.next;
        current.next = node;
        return head;
    }
    current = current.next;
    i++;
}
}