import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  actions: {
    addPicture(result){
      console.log("addpicture method in test-search.js", result);
      this.sendAction('addPicture', result);
    }
  }
});
