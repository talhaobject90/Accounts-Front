import DS from 'ember-data';
import ENV from '../config/environment';
// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend({
  host: ENV.APP.host,
  // authorizer: 'authorizer:devise'
});