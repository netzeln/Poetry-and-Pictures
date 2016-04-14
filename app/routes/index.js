import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      pictures: this.store.findAll('picture'),
      poems: this.store.findAll('poem')
    });
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
