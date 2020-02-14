'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    username: DataTypes.INTEGER,

  }, {});
  Vote.associate = function(models) {
    // associations can be defined here
  };
  return Vote;
};