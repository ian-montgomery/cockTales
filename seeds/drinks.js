
exports.seed = function(knex) {
  return knex('drinks').del()
    .then(function () {
      return knex('drinks').insert([
        {id: 1, name: 'Vodka', tale:'This is a test string for client side rendering purposes.'},
        {id: 2, name: 'Gin', tale:'This is a test string for client side rendering purposes.'},
        {id: 3, name: 'Tequila', tale:'This is a test string for client side rendering purposes.'},
        {id: 4, name: 'Whisky', tale:'This is a test string for client side rendering purposes.'},
        {id: 5, name: 'Rum', tale:'This is a test string for client side rendering purposes.'}
      ]);
    });
};
