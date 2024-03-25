//Ethan Crites
//Date 2/25/2024
//Description Class takes name and sets to a new instance. It also uses a method to log the values of the name property of the object
class Object {
	constructor(name){
		this.name = name;
	}
	nameLog(){
		console.log(this.name);
	}
}

export{Object};

class HP{
	constructor(amount) {
		this.hpLeft = amount;
	}
	getHp(){
		const paragraph = document.createElement("p");
		const node = document.createTextNode("HP: " + this.hpLeft);
		paragraph.appendChild(node);
		const container = document.getElementById("container");
		container.appendChild(paragraph);
	}
	takeHp(){
		this.hpLeft -= 5;
		if (this.hpLeft <= 0) {
			var output = "You have fainted! Lets revive you back to 10 hp.";
			const paragraph = document.createElement("p");
			const node = document.createTextNode(output);
			paragraph.appendChild(node);
			const container = document.getElementById("container");
			container.appendChild(paragraph);
			this.hpLeft = 10;
		}
	}
	giveHp(){
		this.hpLeft += 3;
	}
}

export {HP};