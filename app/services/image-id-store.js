import Ember from 'ember';

export default Ember.Service.extend({
imageID: [],

rememberId(id){
  this.get('imageID').setObjects([]);
  this.get('imageID').pushObject(id);
}
});
