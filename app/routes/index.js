import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('picture');
  },

  actions :{
    wordSearch(params){
      this.transitionTo('results', params.word);
    },

    randomSearch(params){
      this.transitionTo('results', params.word);
    }
  }
});
