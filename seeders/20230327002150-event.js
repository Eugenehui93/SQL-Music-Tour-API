'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('events', [{
    event_id: 1,
    name:'Coachella',
    start_time: '09:00:00',
    end_time: '17:00:00',
    date:2023-04-14,
   },
  {
    event_id:2,
    name:'EDC',
    start_time: '09:00:00',
    end_time:'23:00:00',
    date: 2023-05-19
  },
  {
    event_id: 3, 
    name: 'Hard Summer',
    start_time: '11:00:00',
    emd_time: '23:00:00'
  }])
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
