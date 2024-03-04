//Ethan Crites
//Date 3/3/2024

function playerStats(playerName, playerHP, ...moves ){
	let moveSet = "";
	var name = playerName;
	var hp = playerHP;
	for (let move of moves){
		const paragraph = document.createElement("p");
		const node = document.createTextNode(move);
		paragraph.appendChild(node);
		const container = document.getElementById("moves");
		container.appendChild(paragraph);
	}
	return{
		getName(){
			return name;
		},
		getHP(){
			return hp;
		}
	};
}


var player = playerStats("Mr. Game & Watch", 22, "Backward air attack", "Up special", "Netural air attack", "Down Special", "Down air attack", 
						"Neutral Special", "up air attack", "left/right Special", "Dash attack");
console.log("Name: " + player.getName());
console.log("Damage Meter: " + player.getHP() + "%");
console.log("Stocks: 3");

    