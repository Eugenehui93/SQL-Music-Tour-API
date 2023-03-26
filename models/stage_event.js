'use strict';
const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class Stage_Event extends Model {
       static associate(Event, Stage) {
        Stage_Event.belongsToMany(Stage, {
          foreignKey: 'stage_id',
          as: 'events',
          through: Stage_Event
        })
      }
    }
    Stage_Event.init({
      stage_event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      stage_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'Stage_Event',
      tableName: 'stage_events',
      timestamps: false
    });
    return Stage_Event;
  };