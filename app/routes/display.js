import Ember from 'ember';

export default Ember.Route.extend({


  // model: function(picture) {
  //   // var key = config.myApiKey;
  //   var thisPicture = this.store.findRecord('picture');
  //   var pixabayId = encodeURIComponent('&id='+ picture.imageApiId);
  //   var url = 'https://jsonp.afeld.me/?url=https://pixabay.com/api/?key=2381172-26b42eade332e81b615568b91' + pixabayId;
  //   return Ember.$.getJSON(url).then(function(responseJSON) {
  //       console.log("display", responseJSON.hits[0]);
  //     return responseJSON.hits[0];
  //   });
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
