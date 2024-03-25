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
	constructor(amount){
		this.hpLeft = amount;
	}
	getHp(){
		document.getElementById("container").innerHTML = this.hpLeft;
	}
	takeHp(){
		this.hpLeft -= 3;
		if(this.hpLeft <= 0){
			document.getElementById("container").innerHTML = "You have fainted! Lets revive you back to 10 hp.";
			this.hpLeft = 10;
		}
	}
	giveHp(){
		this.hpLeft += 3;
	}
}

export {HP};