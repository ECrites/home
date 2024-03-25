import{HP} from './lib_objects.js'
const playerHp = new HP(10);
HP.getHp();
function drinkPotion(){
	if (Math.floor(Math.random() * 1) == 0){
		HP.takeHp();
		HP.getHp();
	}
	else{
		HP.giveHp();
		HP.getHp();
	}
}