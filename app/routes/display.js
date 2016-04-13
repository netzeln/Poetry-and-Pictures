import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findRecord('picture', newPicture.id);
  }
})
    // console.log("display js log",model.pictures);
