import Model from 'ember-data/model';

export default Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  lineOne: DS.attr(),
  lineTwo: DS.attr(),
  lineThree: DS.attr(),
  picture: DS.belongsTo('picture', {async: true})
});
