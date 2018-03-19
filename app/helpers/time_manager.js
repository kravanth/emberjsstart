import Object from '@ember/object';
export default Object.extend({
   time:0,
   timeChanged: function(){  // an observer.

     console.log('time changed');
   }.observes('time')

 });