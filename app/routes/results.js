import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({

    model: function(params) {

      var key = config.myApiKey;
      if(params.params !== ""){
        var testWord = encodeURIComponent('&q='+ params.params + '&image_type=photo');
        var url = 'https://jsonp.afeld.me/?url=https://pixabay.com/api/?key=2381172-26b42eade332e81b615568b91' + testWord;

      }else{
        var url = 'https://jsonp.afeld.me/?url=https://pixabay.com/api/?key=2381172-26b42eade332e81b615568b91';
      }
      return Ember.$.getJSON(url).then(function(responseJSON) {
        var numberOfResults = responseJSON.hits.length;
        var randomResult = Math.floor(Math.random()*numberOfResults);
        console.log("route", responseJSON.hits[randomResult]);
        return responseJSON.hits[randomResult];
      });
    },

    actions: {
    addPicture(result) {


      var params = {
        imageApiId: result.id,
        imgWebUrl: result.webformatURL,
        imgPageUrl: result.pageURL,
        previewUrl: result.previewURL
      };

      var newPicture = this.store.createRecord('picture', params);
      newPicture.save();
      this.transitionTo('display', newPicture);
    }
  }
})
