const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "team",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [2, 32],
            msg: "Team name should be between 2 and 32 characters",
          },
        },
      },
    },
    { timestamps: false }
  );
};
