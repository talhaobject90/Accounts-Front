import DS from 'ember-data';

export default DS.Model.extend({
  email:DS.attr('string'),
  name:DS.attr('string'),
  partnersdailies: DS.hasMany('partnersdaily' ,{embedded: 'always', async:true}),

});
