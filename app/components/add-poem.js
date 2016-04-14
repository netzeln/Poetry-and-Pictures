import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePoem(){
      params = {
        author: this.get('author'),
        title: this.get('title')
      }
    }
  }
  // This is where we'll write action for savePoem
});
