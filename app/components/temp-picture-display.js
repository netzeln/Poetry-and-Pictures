import Ember from 'ember';

export default Ember.Component.extend({
  imageUrl: "",
  init() {
    this._super();
    var pixabayId = encodeURIComponent('&id='+ this.get('picture.imageApiId'));
    var url = 'https://jsonp.afeld.me/?url=https://pixabay.com/api/?key=2381172-26b42eade332e81b615568b91' + pixabayId;
    var self = this;
    Ember.$.getJSON(url).then(function(responseJSON) {
      console.log("inside promise", responseJSON.hits[0].webformatURL);
      self.set('imageUrl', responseJSON.hits[0].webformatURL);
    });



  }
  // imageUrl: Ember.computed('picture', function() {
  //   var pixabayId = encodeURIComponent('&id='+ this.get('picture.imageApiId'));
  //   var url = 'https://jsonp.afeld.me/?url=https://pixabay.com/api/?key=2381172-26b42eade332e81b615568b91' + pixabayId;
  //   return Ember.$.getJSON(url).then(function(responseJSON) {
  //     console.log("inside promise", responseJSON.hits[0].webformatURL);
  //     return responseJSON.hits[0].webformatURL;
  //   });
  // })
});
