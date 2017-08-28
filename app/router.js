import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard', {path: '/'}, function() {
    this.route('dailies', function() {
      this.route('daily',  {path: ':id'} ,function() {
        this.route('view');
      });
    });
  });
});

export default Router;
