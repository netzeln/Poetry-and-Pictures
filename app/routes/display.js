import Ember from 'ember';

export default Ember.Route.extend({


  // model(){
  //   return this.store.findRecord('picture', picture.id);
  // },
  actions:{
    savePoem(params){
      var newPoem = this.store.createRecord('poem', params);
      var picture = params.picture;
      
      picture.get('poems').addObject(newPoem);
      newPoem.save().then(function(){
        return picture.save();
      });
      this.transitionTo('display', params.picture);
    }
  }
})
