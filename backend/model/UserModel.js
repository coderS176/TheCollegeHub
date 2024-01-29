const { DataTypes } = require("sequelize");



const userModel = (sequelize) => {
    return sequelize.define("user", {
		userId: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		displayName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		about: {
			type: DataTypes.TEXT,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};


module.exports = userModel;