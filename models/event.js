const { finalizeSession } = require('pg/lib/sasl');
const{Model, INTEGER}=require('sequelize');
module.exports = (sequelize,DataTypes)=>{
    class Event extends Model{
        static associate(Stage,Stave_Event, Set_Time,Meet_Greet){
            Event.belongsToMany(Stage,{
                foreignKey:"event_id",
                as: "stages",
                through: Stages_Event
            }),
            Event.hasMany(Meet_Greet,{
                foreignKey:"event_id",
                as:"meet_greets"
            }),
            Event.hasMany(Set_Time, {
                foreignKey: "event_id",
                as: "set_times"
            })
        }
    }
    Event.init({
        event_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        start_time:{
            type:DataTypes.DATE,
            allowNull:false
        },
        end_time:{
            type:DataTypes.DATE,
            allowNull:false
        },
        date:{
            type:DataTypes.DATE,
            allowNull:false
        }

    },{
        sequelize, modelName: 'Event', tableName: 'events', timestamps: false
    });
    return Event;
}