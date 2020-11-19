const obj1= {
	name: 'Hello',
	review: 'there',
};
console.log("first object", obj1)
//mutates object
obj1.review = "Jo"
console.log('first mutated object', obj1);

const obj2 = {
	name: 'Hello',
	review: 'How are you',
};
console.log("Second Object", obj2)
//prevents object mutation
Object.freeze(obj2)
obj2.review = "Jo"
console.log('second un-mutated object', obj2);