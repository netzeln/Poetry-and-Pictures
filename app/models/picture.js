import DS from 'ember-data';

export default Model.extend({
  imageApiId: DS.attr(),
  imgWebUrl: DS.attr(),
  imgPageUrl: DS.attr(),
  previewUrl: DS.attr(),
  poems: DS.hasMany('poem', {async: true})

});


https://pixabay.com/api/?key=2381172-26b42eade332e81b615568b91&id=1268609
