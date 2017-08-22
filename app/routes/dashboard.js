import Ember from 'ember';

export default Ember.Route.extend({

  model:function(){
  return Ember.RSVP.hash({
    daily: this.store.findAll('daily'),

  });
},



setupController: function(controller ,model) {

  controller.set('dailies',model.daily);

}
});
