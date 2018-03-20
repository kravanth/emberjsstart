import Mixin from '@ember/object/mixin';


export default Mixin.create({
    valid: function(number){
		console.log("in valid mixin.") ;
		if(isNaN(number)){
			console.log("NaN") ;
			return false;
		} else{
			console.log("valid num") ;
			return true;
		} 
    } 
});