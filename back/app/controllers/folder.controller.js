const db = require("../models");
const Folder = db.folders;
const Op = db.Sequelize.Op;

// Create and Save a new folder
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a folder
  const folder = {
    name: req.body.name,
  };

  // Save folder in the database
  Folder.create(folder)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the folders."
      });
    });
};

// Retrieve all folders from the database.
exports.findAll = (req, res) => {
  Folder.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving folders."
      });
    });
};

// Find a single folder with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Folder.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving folder with id=" + id
      });
    });
};

// Update a folder by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  Folder.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "folder was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update folder with id=${id}. Maybe folder was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating folder with id=" + id
      });
    });
};

// Delete a folder with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Folder.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "folder was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete folder with id=${id}. Maybe folder was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Folder with id=" + id
      });
    });
};

// Delete all folders from the database.
exports.deleteAll = (req, res) => {
  Folder.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} folders were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all folders."
      });
    });
};

// find all checked Folder
exports.findAllPublished = (req, res) => {
  Folder.findAll({ where: { checked: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving folders."
      });
    });
};
