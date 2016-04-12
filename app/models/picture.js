import Model from 'ember-data/model';

export default Model.extend({
  imageApiId: DS.attr(),
  imgWebUrl: DS.attr(),
  imgPageUrl: DS.attr(),
  poems: DS.hasMany('poem', {async: true})

});
