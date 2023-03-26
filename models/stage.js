'use strict';
const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class Stage extends Model {
       static associate(Event, Stage_Event, Set_Time) {
        Stage.belongsToMany(Event, {
          foreignKey: "stage_id",
          as: "events",
          through: Stage_Event
        }),
  
        Stage.hasMany(Set_Time, {
          foreignKey: "stage_id",
          as: "set_times"
        })
      }
    }
    Stage.init({
      stage_ig: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      crowd_capacity: {
        type: DataTypes.SMALLINT,
        allowNull: true
      },
      food: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      sequelize,
      modelName: 'Stage',
      tableName: 'stages',
      timestamps: false
    });
    return Stage;
  };