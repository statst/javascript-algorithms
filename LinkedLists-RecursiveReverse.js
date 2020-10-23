//Linked Lists-Recursive Reverse
function Node(data = null, next = null) {
	this.data = data;
	this.next = next;
}

function reverse(head, previous = null) {
	return !head ? previous : reverse(head.next, new Node(head.data, previous));
}

