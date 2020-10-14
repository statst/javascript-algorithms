class Node{
	constructor(value){
		this.value = value;
		this.next = null
	}
}
class SinglyLinkedList {
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(value){
		let newNode = new Node(value);
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
	unshift(value){
		//create a new node using the value passed to the function
		let newNode = new Node(value);
		//if there is no head, set the head and tail to new node
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			//else set the new node's next property to the current head property
			newNode.next = this.head;
			//set the head property to be the new node
			this.head = newNode;
		}
		//increment the length by 1
		this.length++;
		//return linked list
		return this;
	}
	get(index){
		if(index < 0 || index >= this.length) return null
		let counter = 0;
		let current = this.head;
		while(counter != index){
			current = current.next;
			current++;
		}
		return current;
	}
	set(index, value){
		let foundNode = this.get(index);
		if(foundNode){
			foundNode.value = value;
			return true;
		}
		return false;
	}
	//insert a new node
	insert(index, value){
		//if index is les than zero and greater than the length return false
		if(index < 0 || index > this.length) return false;
		//if index is equal to  the length push a new code to the end of the list
		if(index === this.length) return this.push(value);
		//if index is zero unshift the new node to the start of the list
		if (index === 0) return this.unshift(value);
		let newNode = new Node(value);
		let previous = this.get(index-1);
		let temp = previous.next;
		//set next property to be new node
		previous.next = newNode;
		//set next property on new node to the previous next
		newNode.next = temp;
		//increment the length
		this.length++;
		return true;
	}
	//remove a node from the linked list at a specific position
	remove(index){
		//if the index is negative or greater than one return undefined
		if (index < 0 || index >= this.length) return undefined;
		//if index is 0, remove first item
		if (index === 0) return this.shift();
		//if index is same as length-1 remove last item
		if ((index === this.length - 1)) return this.pop();
		//else use get method, access the node at index-1
		let previousNode = this.get(index-1)
		//set the next property on that node to be the next of the next node
		let removed = previousNode.next;
		previousNode.next = removed.next;
		//decrement the length
		this.length--;
		//return the value of the removed node
		return removed;
	}
	
}




let linkedList = new SinglyLinkedList();
console.log(linkedList.push("Hi"))
console.log(linkedList.push("How"))
console.log(linkedList.push("are"));
console.log(linkedList.push("you"));
console.log(linkedList.push("Jo"));
// console.log(linkedList.shift());
// console.log(linkedList.remove(1));
// console.log(linkedList.get(1));