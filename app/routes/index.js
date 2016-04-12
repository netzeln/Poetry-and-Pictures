import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({

  actions :{
    wordSearch(params){
      this.transitionTo('results', params);
    }
  }
});
