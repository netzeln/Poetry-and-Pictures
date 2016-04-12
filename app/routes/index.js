import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var url = 'http://api.thewalters.org/v1/objects?keyword=spoon&apikey=JiOzztzq8vkwrYiX86LDMf1SEt9nfKCD1a38UdcAw2B1nO2FcM6hW9Gegvl5kCBn';
var test = Ember.$.getJSON(url);
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.Items);
      return responseJSON.Items;
    });
  }
});
