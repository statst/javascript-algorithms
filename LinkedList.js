class Node{
	constructor(val){
		this.val = val;
		this.next = null
	}
}
class SinglyLinkedList {
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val){
		let newNode = new Node(val);
		if(!this.head){
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop(){
		//if there are no nodes in the list, return undefined
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		//loop through the list until reach tail
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		//set the tail to be the second to last node
		this.tail.next = null;
		//decrement the length of the list by 1
		this.length--
		if(this.length === 0){
			this.head = null;
			this.tail = null;
		}
		//return the value of the node removed
		return current;
	}
	shift() {
		//if there are no nodes in the list, return undefined
		if (!this.head) return undefined;
		//store current head property in the variable
		let currentHead = this.head;
		//set the head property to be the current head's next property
		this.head = currentHead.next;
		//decrement length by 1
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		//return the value of the node removed
		return currentHead;
	}
}




let linkedList = new SinglyLinkedList();
console.log(linkedList.push("Hi"))
console.log(linkedList.push("How"))
console.log(linkedList.push("are"));
console.log(linkedList.push("you"));
console.log(linkedList.push("Jo"));
console.log(linkedList.shift());