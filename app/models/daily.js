import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  cashinhand: DS.attr('number'),
  profit : DS.attr('number'),
  partnersdailies: DS.hasMany('partnersdaily' ,{embedded: 'always', async:true})


});
