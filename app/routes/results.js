import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var testWord = encodeURIComponent('&q='+ params.params);

    var url = 'https://jsonp.afeld.me/?url=https://pixabay.com/api/?key=2381172-26b42eade332e81b615568b91'+ testWord;
console.log("url", params);
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var numberOfResults = responseJSON.hits.length;
      var randomResult = Math.floor(Math.random()*numberOfResults);
console.log(responseJSON.hits[randomResult]);
      return responseJSON.hits[randomResult];
    });
  }
});
