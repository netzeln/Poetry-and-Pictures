import DS from 'ember-data';

export default Model.extend({
  imageApiId: DS.attr(),
  imgWebUrl: DS.attr(),
  imgPageUrl: DS.attr(),
  previewUrl: DS.attr(),
  poems: DS.hasMany('poem', {async: true})

});
