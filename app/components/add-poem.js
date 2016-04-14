import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    poemFormShow(){
      this.set('addNewPoem', true);
    },
    savePoem(){
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        lineOne: this.get('lineOne'),
        lineTwo: this.get('lineTwo'),
        lineThree: this.get('lineThree'),
        picture: this.picture,
      };
      this.sendAction('savePoem', params);
      this.set('addNewPoem', false);
    }
  }

});
