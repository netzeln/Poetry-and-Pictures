import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({


    model: function(params) {

      var key = config.myApiKey;
      var url = "";
      if(params.params !== ""){
        var testWord = encodeURIComponent('&q='+ params.params + '&image_type=photo&per_page=197');
        url = 'https://jsonp.afeld.me/?url=https://pixabay.com/api/?key='+ key + testWord;
      }else{
        var perPage = encodeURIComponent('&per_page=189');
        url = 'https://jsonp.afeld.me/?url=https://pixabay.com/api/?key='+ key + perPage;
      }
      return Ember.$.getJSON(url).then(function(responseJSON) {
        var numberOfResults = responseJSON.hits.length;
        var randomResult = Math.floor(Math.random()*numberOfResults);
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
});
