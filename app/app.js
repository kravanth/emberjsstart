import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import numericBox from './helpers/numeric_box';  // am:  l
import Person from './helpers/person';
import timeManager from './helpers/time_manager';
import father from './helpers/father';
import child from './helpers/child';


const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);
let textbox = numericBox.create();   // am:  lines added.
console.log("number: ", textbox.valid("12"));
textbox.onFocus();

console.log("arithmetic: " ,textbox.valid("12 * 4"));  // false
textbox.onFocus();

console.log("string: " , textbox.valid("abc"));
textbox.onFocus();


let person = Person.create({
  firstName: 'john',
  lastName: 'miller'
});

// observer won't fire until `fullName` is consumed first
person.get('fullName'); 
person.set('firstName', 'Tony');



 
let myTimeManager = timeManager.create({
 time: 12  // init value.
});
myTimeManager.set("time",22);

let ajay = father.create({
  name:'Ajay',
  age:40,
  address:'Whitefield'
});

var ram = child.create({
  school:'Whitefield High School',
  father: ajay
});

console.log("child's addr: " ,  ram.get('address'));
ajay.set('address','Mysore');
console.log("child's addr: " , ram.get('address'));

export default App;
