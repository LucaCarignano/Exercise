module.exports = app => {
  const folders = require("../controllers/folder.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", folders.create);

  // Retrieve all folders
  router.get("/", folders.findAll);

  // Retrieve all published folders
  router.get("/published", folders.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", folders.findOne);

  // Update a Tutorial with id
  router.put("/:id", folders.update);

  // Delete a Tutorial with id
  router.delete("/:id", folders.delete);

  // Delete all folders
  router.delete("/", folders.deleteAll);

  app.use('/api/folders', router);
};
