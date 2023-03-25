// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
module.exports=(sequelize,DataTypes)=> {
class Band extends Model{
    static associate(Meet_Greet, Set_Time){
        Band.hasMany(Meet_Greet, {
            foreignKey: "band_id",
            as: "meet_greets"
        }),
        Band.hasMany(Set_Time, {
            foreignKey: "band_id",
            set_times: "set_times"
        })
    }
}
Band.init({
    band_id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    genre:{
        type:DataTypes.TEXT,
        allowNull: false
    },
    members: {
        type:DataTypes.SMALLINT,
        allowNull:false
    },
    available_start_time:{
        type:DataTypes.DATE,
        allowNull:false
    },
    emd_time:{
        type: DataTypes.DATE,
        allowNull: false
    }
});
return Band;
}

