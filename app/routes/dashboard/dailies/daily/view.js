import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
  return Ember.RSVP.hash({

    daily: this.modelFor('dashboard.dailies.daily') 


  });
},



setupController: function(controller ,model) {

  controller.set('daily',model.daily);

}
});
