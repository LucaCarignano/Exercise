module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    check: {
      type: Sequelize.BOOLEAN
    },
    folder_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'folders',
        key: 'id',
      },
      onDelete: 'cascade'
    }
  });
  return Task;
};
