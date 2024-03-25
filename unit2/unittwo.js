import{HP} from './lib_objects.js'
const playerHp = new HP(10);
playerHp.getHp();
function drinkPotion() {
	if (Math.floor(Math.random() * 1) == 0){
		playerHp.takeHp();
		playerHp.getHp();
	}
	else{
		playerHp.giveHp();
		playerHp.getHp();
	}
}