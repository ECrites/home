import{HP} from './lib_objects.js'

const playerHp = new HP(20);
playerHp.getHp();
document.querySelector('button').addEventListener('click', drinkPotion);
function drinkPotion() {
	var rng = Math.floor(Math.random() * 2);
	if (rng == 0) {
		playerHp.takeHp();
		playerHp.getHp();
	}
	 if (rng == 1){
		playerHp.giveHp();
		playerHp.getHp();
	}
}

