const express = require("express");
const { Place } = require("../models");
const placesRouter = express.Router();

placesRouter.get("/", async (req, res) => {
  try {
    const places = await Place.findAll();
    res.json({
      places
    });
  } catch (e) {
    console.log("Could not process request for GET places");
    res.sendStatus(404);
  }
});

placesRouter.get("/:id", async (req, res) => {
  try {
    const place = await Place.findByPk(req.params.id);
    res.json({
      place
    });
  } catch (e) {
    console.log("Could not process request for GET ONE place");
    res.sendStatus(404);
  }
});

placesRouter.post("/", async (req, res) => {
  try {
    const place = await Place.create(req.body);
    res.json({
      place
    });
  } catch (e) {
    console.log("Unable to process request for POST place");
    res.sendStatus(404);
  }
});

module.exports = {
  placesRouter
};