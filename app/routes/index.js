import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('picture');
  },

  actions :{
    wordSearch(params){
      console.log("indexjs", params);
      this.transitionTo('results', params.word);
    },

    randomSearch(params){
      console.log("indexjs", params);
      this.transitionTo('results', params.word);
    }
  }
});
