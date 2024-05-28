const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "teams",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "Name should only contain letters",
          },
          len: {
            args: [2, 32],
            msg: "Name should be between 2 and 32 characters",
          },
        },
      },
    },
    { timestamps: false }
  );
};
