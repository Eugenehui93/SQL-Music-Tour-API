'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
   await queryInterface.bulkInsert('stages', [{
    stage_id: 1,
    name:'Coachella',
    address:'Palm Springs',
    crowd_capacity: '20000',
    food:'Vendors'
   },
  {
    stage_id: 2,
    name: 'EDC',
    address: 'Las Vegas',
    crowd_capacity: '20000',
    food: 'NONE'
  },
  {
    stage_id: 3,
    name: 'Hard Summer',
    address: 'Los Angeles',
    crowd_capacity: 10000
  }
])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
