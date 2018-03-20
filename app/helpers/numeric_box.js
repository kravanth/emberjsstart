
import Object from '@ember/object';
 
import validNumberMixin from '../mixins/valid_number';
import focusableMixin from '../mixins/focusable';

export default Object.extend(validNumberMixin,focusableMixin,{
   text:""
});