import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  user:DS.belongsTo('user',{embeded: 'always',async:true}),
  daily:DS.belongsTo('daily',{embeded: 'always',async:true}),
  investment: DS.attr('number'),
  holdingspercentage: DS.attr('number'),
  profitbeforesharing: DS.attr('number'),
  profitaftersharing: DS.attr('number'),
  withdrawals: DS.attr('number'),
});
