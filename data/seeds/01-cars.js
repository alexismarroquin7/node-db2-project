// STRETCH
exports.seed = function (knex) {
  return knex('cars').truncate()
    .then(() => {
      return knex('cars').insert([
        { vin: '00000000000000001', make: 'Toyota', model: 'Camry', mileage: 1000, title: 'My Car 1', transmission: '8-speed automatic' },
        { vin: '00000000000000002', make: 'Toyota', model: 'Tacoma', mileage: 2000, title: 'My Car 2', transmission: '6-speed automatic' }
      ]);
    })
} 