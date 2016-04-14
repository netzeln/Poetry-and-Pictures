import Ember from 'ember';

export default Ember.Route.extend({
  imageIdStore: Ember.inject.service('image-id-store'),

  // model(){
  //   return this.store.findRecord('picture', picture.id);
  // }
})
    // console.log("display js log",model.pictures);
