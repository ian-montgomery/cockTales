
exports.seed = function(knex) {
  return knex('drinks').del()
    .then(function () {
      return knex('drinks').insert([
        {id: 1, name: 'Vodka', tale:'The origin of “vodka” comes from the Russian word “voda”, which means water.'},
        {id: 2, name: 'Vodka', tale:'Vodka can be made from potatoes, barley, rye, corn, whey, grapes… These all contribute to the flavour of the spirit (yes, there is flavour in vodka!).'},
        {id: 3, name: 'Vodka', tale:'Vodka has a surprising amount of health benefits. As one of the most amazing facts about vodka, it can be used to tighten skin and shrink pores.'},
        {id: 4, name: 'Vodka', tale:'Vodka can be made from nearly any fermented food that contains sugar or starch, then it is distilled to increase alcohol content.'},
        {id: 5, name: 'Vodka', tale:'One of the reasons vodka became popular in Russia was of its ability to remain liquid even in the coldest regions of northern Siberia.'},
        {id: 6, name: 'Vodka', tale:'Saying “What can I do?” with a Russian accent actually means “I’ll find vodka” in Russian.'},
        {id: 7, name: 'Gin', tale:''},
        {id: 8, name: 'Gin', tale:''},
        {id: 9, name: 'Gin', tale:''},
        {id: 10, name: 'Gin', tale:''},
        {id: 11, name: 'Gin', tale:''},
        {id: 12, name: 'Gin', tale:''},
        {id: 13, name: 'Tequila', tale:''},
        {id: 14, name: 'Tequila', tale:''},
        {id: 15, name: 'Tequila', tale:''},
        {id: 16, name: 'Tequila', tale:''},
        {id: 17, name: 'Tequila', tale:''},
        {id: 18, name: 'Tequila', tale:''},
        {id: 19, name: 'Whisky', tale:'“Whiskey” is a Gaelic word which means “water of life.”'},
        {id: 20, name: 'Whisky', tale:'In 1830, American consumption of alcohol, per capita, was insane. It peaked at what is roughly 1.7 bottles of standard strength whiskey, per person, per week or 88 bottles a year.'},
        {id: 21, name: 'Whisky', tale:'Nikola Tesla drank Whiskey every day because he supposed it would make him live to 150.'},
        {id: 22, name: 'Whisky', tale:'An incredible one billion bottles of scotch are exported from Scotland every year.'},
        {id: 23, name: 'Whisky', tale:'The earliest known record of Whiskey production dates back to 1494.'},
        {id: 24, name: 'Whisky', tale:'The evaporation of Alcohol from a Whiskey barrel during maturation is referred to as the ‘Angel’s Share’.'},
        {id: 25, name: 'Rum', tale:''},
        {id: 26, name: 'Rum', tale:''},
        {id: 27, name: 'Rum', tale:''},
        {id: 28, name: 'Rum', tale:''},
        {id: 29, name: 'Rum', tale:''},
        {id: 30, name: 'Rum', tale:''}
      ]);
    });
};
