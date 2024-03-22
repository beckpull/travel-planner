const Location = require('./Location');
const Traveler = require('./Traveler');
const Trip = require('./Trip');

Traveler.belongsToMany(Location, {
    through: {
        model: Trip,
        unique: false,
    },
    as: 'planned_trips',
    foreignKey: 'traveler_id',
    onDelete: 'CASCADE',
});

Location.belongsToMany(Traveler, {
    through: {
        model: Trip,
        unique: false,
    },
    as: 'location-travelers',
    foreignKey: 'location_id',
});

module.exports = { Traveler, Location, Trip }

