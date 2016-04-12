import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://api.thewalters.org/v1/objects?apikey='+ key +'&keyword='+params.word+'&classification=Painting';

    return Ember.$.getJSON(url).then(function(responseJSON) {
      var numberOfResults = responseJSON.Items.length;
      var randomResult = Math.floor(Math.random()*numberOfResults);
      console.log(responseJSON.Items[randomResult]);
      return responseJSON.Items[randomResult];
    });
  }
});
