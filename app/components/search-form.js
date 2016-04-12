import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    wordSearch(){
      var params = {
        word: this.get('searchWord')
      };
      this.sendAction('wordSearch', params);
    },
    randomSearch(){
      var params = {
        word: ""
      };
      this.sendAction('randomSearch', params);
    }
  }
});
