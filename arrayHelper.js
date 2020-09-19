var colors = ['red', 'blue', 'green'];

//print colors with index
// colors.forEach(function(color, i){
//     console.log(color, i)
// });

//create an array of numbers
let numbers = [1, 6,8,9,23]

//create a variable to hold the sum
let sum = 0;

//loop over the array, incrementing the sum variable
numbers.forEach(function(num){
    sum += num;
})
//print the sum variable
// console.log(sum);

//read posts
function handlePosts() {
	var posts = [
		{ id: 23, title: 'Daily JS News' },
		{ id: 52, title: 'Code Refactor City' },
		{ id: 105, title: 'The Brightest Ruby' },
	];

	posts.forEach(function (post) {
		savePost(post);
	});
}

//calculate the area of each image and store it in the new array
var images = [
	{ height: 10, width: 30 },
	{ height: 20, width: 90 },
	{ height: 54, width: 32 },
];
var areas = [];
images.forEach(function (img) {
	img = img.height * img.width;
	areas.push(img);
});

// console.log(areas);

//Map Helper
let doubled = numbers.map((x) =>{
    return x * 2;
})

// console.log(doubled)

var cars = [
	{ model: 'Buick', price: 'CHEAP' },
	{ model: 'Camaro', price: 'expensive' },
];

let carPrices = cars.map((x)=>{
    return x.price;
})

// console.log(carPrices);

//map problems
var images = [
	{ height: '34px', width: '39px' },
	{ height: '54px', width: '19px' },
	{ height: '83px', width: '75px' },
];

var heights = images.map(function (img) {
	return img.height;
});

// console.log(heights);

//speed
var trips = [
	{ distance: 34, time: 10 },
	{ distance: 90, time: 50 },
	{ distance: 59, time: 25 },
];

var speeds = trips.map(function (trip) {
	return trip.distance / trip.time;
});

// console.log(speeds);


let products = [
	{ name: 'cucumber', type: 'vegetable', quantity: 0, price: 15 },
	{ name: 'banana', type: 'fruit', quantity: 5, price: 25 },
	{ name: 'orange', type: 'fruit', quantity: 6, price: 35 },
	{ name: 'celery', type: 'vegetable', quantity: 9, price: 55 },
];

let filteredProducts = products.filter((x) => {
	return x.type === 'fruit' && x.quantity > 5 && x.price < 55;
})

// console.log(filteredProducts);

// let post = { id:4, title: 'New Post'}

// let comments = [
// 	{ postId: 4, content: 'awesome post' },
// 	{ postId: 2, content: 'ok post' },
// 	{ postId: 1, content: 'good post' },
// ];

// function commentsForPost(post, comments){
// 	return comments.filter((x) =>{
// 		return x.postId === post.id;
// 	})
// }

// console.log(commentsForPost(post, comments));

//create new array that contains number greater than 50
var number = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = number.filter(function (num) {
	return num > 50;
});

// console.log(filteredNumbers);

var users = [
	{ id: 1, admin: true },
	{ id: 2, admin: false },
	{ id: 3, admin: false },
	{ id: 4, admin: false },
	{ id: 5, admin: true },
];

// var filteredUsers = users.filter(function (user) {
// 	return user.admin === true;
// });

// console.log(filteredUsers);

//find helper
let user = [{ name: 'Jill' }, { name: 'Alex' }, { name: 'Bill' }];


// for (let i=0; i<user.length; i++){
// 	if(user[i].name === 'Alex'){
// 		users = user[i];
// 		break
// 	}
// }
// console.log(users);

let userFind= user.find((user) =>{
	return user.name === 'Alex';
})
// console.log(userFind);

let posts = [
	{id:1, title: 'New Post'},
	{id:2, title: 'Old Post'}
];

let comment = {postId: 1, content: 'Great Post'}

function postForComment(posts, comment){
	return posts.find((x) =>{
		return x.id === comment.postId;
	})
}

// console.log(postForComment(posts, comment));

var users = [
	{ id: 1, admin: false },
	{ id: 2, admin: false },
	{ id: 3, admin: true },
];

var admin = users.find(function (user) {
	return user.admin === true;
});

// console.log(admin);

var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find(function (account) {
	return account.balance === 12;
});

// console.log(account);


//every and some helper

var computers = [
	{ name: 'Apple', ram: 24 },
	{ name: 'Compaq', ram: 4 },
	{ name: 'Acer', ram: 32 }
];

// let onlySomeComputersCanRunProgram = false;
// let allComputersCanRunProgram = true;

// for(let i=0; i< computers.length; i++){
// 	let computer = computers[i];

// 	if(computer.ram < 16){
// 		allComputersCanRunProgram = false;
// 	} else {
// 		onlySomeComputersCanRunProgram = true;
// 	}
// }

// console.log(allComputersCanRunProgram);
// console.log(onlySomeComputersCanRunProgram);

//using every helper

let everyComputer = computers.every((computer) =>{
	return computer.ram > 16;
})


// console.log(everyComputer);

//somehelper

let someComputer = computers.some((computer) => {
	return computer.ram > 16
})
// console.log(someComputer);

let names = [ "Alexandria", "Matthew", "Joe"];

let everyName = names.every((name) => {
	return name.length > 4;
})

// console.log(everyName);

let someName = names.some((name) => {
	return name.length > 4;
});

// console.log(someName);

// //use case of every helper
// function Field(value) {
// 	this.value = value
// }

// Field.prototype.validate = function ( ){
// 	return this.value.length > 0;
// }
// let username = new Field("2cool");
// let password = new Field("my_password")

// console.log(username.validate() &&password.validate());

// var fields = [username, password]
// fields.every((field) => {
// 	return fields.validate
// })

//every coding challenge
var users = [
	{ id: 21, hasSubmitted: true },
	{ id: 62, hasSubmitted: false },
	{ id: 4, hasSubmitted: true },
];

var hasSubmitted = users.every(function (user) {
	user.hasSubmitted = true;
});

//some coding challenge
var requests = [
	{ url: '/photos', status: 'complete' },
	{ url: '/albums', status: 'pending' },
	{ url: '/users', status: 'failed' },
];

var inProgress = requests.some(function (request) {
	request.status === 'pending';
});

