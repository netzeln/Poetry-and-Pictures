import config from '../config/environment';
import Ember from 'ember';

export default Ember.Component.extend({
  imageUrl: "",
  init() {
    var key = config.myApiKey;
    this._super();
    var pixabayId = encodeURIComponent('&id='+ this.get('picture.imageApiId'));
    var url = 'https://jsonp.afeld.me/?url=https://pixabay.com/api/?key=' + key + pixabayId;
    var self = this;
    Ember.$.getJSON(url).then(function(responseJSON) {
      self.set('imageUrl', responseJSON.hits[0].webformatURL);
    });
  }
  // much thanks to Mike and Courtney for help here!
});
