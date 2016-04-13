import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  lineOne: DS.attr(),
  lineTwo: DS.attr(),
  lineThree: DS.attr(),
  picture: DS.belongsTo('picture', {async: true})
});
