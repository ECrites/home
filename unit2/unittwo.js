import{hp} from './lib_objects.js'
const playerHp = new hp(10);
hp.getHp();
function drinkPotion(){
	if (Math.floor(Math.random() * 1) == 0){
		hp.takeHp();
		hp.getHp();
	}
	else{
		hp.giveHp();
		hp.getHp();
	}
}