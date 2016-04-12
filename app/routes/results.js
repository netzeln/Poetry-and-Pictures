import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    console.log(params.params);
    if(params.params !== ""){
      var testWord = encodeURIComponent('&q='+ params.params + '&image_type=photo');
      var url = 'https://jsonp.afeld.me/?url=https://pixabay.com/api/?key=2381172-26b42eade332e81b615568b91'+ testWord;
    }else{
      var url = 'https://jsonp.afeld.me/?url=https://pixabay.com/api/?key=2381172-26b42eade332e81b615568b91'
    }
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var numberOfResults = responseJSON.hits.length;
      console.log(numberOfResults);
      var randomResult = Math.floor(Math.random()*numberOfResults);
console.log(responseJSON.hits[randomResult]);
      return responseJSON.hits[randomResult];
    });
  }
});
