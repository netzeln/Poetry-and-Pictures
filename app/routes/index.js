import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var url = 'http://api.thewalters.org/v1/objects?keyword=landscape&apikey=JiOzztzq8vkwrYiX86LDMf1SEt9nfKCD1a38UdcAw2B1nO2FcM6hW9Gegvl5kCBn';
var test = Ember.$.getJSON(url);
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.Items);
      var numberOfResults = responseJSON.Items.length;
      var randomResult = Math.floor(Math.random()*numberOfResults);
      return responseJSON.Items[randomResult];
    });
  }
});
