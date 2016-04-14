import Ember from 'ember';

export default Ember.Route.extend({


  model: function(picture) {
    // var key = config.myApiKey;
    //  console.log("picture in the model for api", picture);
    return this.store.findRecord('picture', picture.picture_id);
  },

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
