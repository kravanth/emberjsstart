import EmberObject, {
    computed,
    observer
  } from '@ember/object';
  
   export default EmberObject.extend({
    // these will be supplied by `create`
    firstName: null,
    lastName: null,
  
    fullName: computed('firstName', 'lastName', function() {
      return `${this.get('firstName')} ${this.get('lastName')}`;
    }),
  
    fullNameChanged: observer('fullName', function() {
      // deal with the change
      console.log(`fullName changed to: ${this.get('fullName')}`);
    })
  });