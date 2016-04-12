import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var testWord = encodeURIComponent('&q=kittens');

    var url = 'https://jsonp.afeld.me/?url=https://pixabay.com/api/?key=2381172-26b42eade332e81b615568b91'+ testWord;

    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.hits[0]);
      return responseJSON.hits[0];
    });
  }
});
