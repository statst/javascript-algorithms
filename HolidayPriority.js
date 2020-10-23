function HolidayPriorityQueue() {
	//Priority queue Constructor
	this.arr = [];
}

HolidayPriorityQueue.prototype.addGift = function (gift) {
	//Insert gift into priority queue and return new length
	this.arr.push(gift);
	return this.arr.length;
};

HolidayPriorityQueue.prototype.buyGift = function () {
	//Return gift with highest priority (lowest integer value)
	this.arr = this.arr.sort((a, b) => a.priority - b.priority);
	return this.arr.length ? this.arr.shift().gift : '';
};
