import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  actions: {
    addPicture(result){
      this.sendAction('addPicture', result);
    }
  }
});
