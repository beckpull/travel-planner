const Location = require('./Location');
const Traveler = require('./Traveler');
const Trip = require('./Trip');

Traveler.hasMany(Trip, {
    foreignKey: 'traveler_id',
    onDelete: 'CASCADE',
});

Trip.belongsTo(Traveler, {
    foreignKey: 'traveler_id',
})

Location.hasMany(Traveler, {
    through: Trip,
    foreignKey: 'location_id',
});

