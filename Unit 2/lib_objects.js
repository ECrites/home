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