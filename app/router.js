import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path:'/results/:params'});
  this.route('image');
  this.route('about');
  this.route('contact');
  this.route('display', {path:'/display/:picture_id'});
});

export default Router;
