
 import Object from '@ember/object';
 import { alias } from '@ember/object/computed';

export default Object.extend({
  school:'',
  father:null,
  address: alias('father.address')
});