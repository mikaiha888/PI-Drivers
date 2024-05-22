const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "driver",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "First name should only contain letters",
          },
          len: {
            args: [2, 32],
            msg: "First name should be between 2 and 32 characters",
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "Last name should only contain letters",
          },
          len: {
            args: [2, 32],
            msg: "Last name should be between 2 and 32 characters",
          },
        },
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: {
            msg: 'Must be a valid date'
          },
          isBefore: {
            args: new Date().toISOString().split('T')[0],
            msg: 'Date of birth cannot be in the future'
          },
        }
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "Nationality should only contain letters",
          },
          len: {
            args: [2, 32],
            msg: "Nationality should be between 2 and 32 characters",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: {
            msg: "Must be a valid URL",
          },
          isImage(value) {
            if (!/\.(jpg|jpeg|png|gif)$/i.test(value)) {
              throw new Error(
                "URL must point to an image file (.jpg, .jpeg, .png, .gif)"
              );
            }
          },
        },
      },
    },
    { timestamps: false }
  );
};
