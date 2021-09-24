module.exports = (sequelize, Sequelize) => {
  const Folder = sequelize.define("folder", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });
  return Folder;
};
