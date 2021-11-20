import db from "../config/db.js";
import { Cars } from "../models/index.js";

class Car {
  constructor() {
    (this.name = ""), (this.price = ""), (this.capacity = "");
  }

  getAll(req, res) {
    db.connect();

    Cars.find((err, data) => {
      console.log("find", data);
      if (err) res.status(500).send();
      if (data.length === 0) res.status(204).send();
      res.status(200).send(data);
    });
  }

  getOne(req, res) {

    db.connect();

    const id = req.params.id;

    Cars.findById(id, (err, car) => {
      if (err) res.sendStatus(404);
      res.status(200).json(car);
      req.body.car = car;
      console.log("body", req.body);
    });
  }

  create(req, res) {
    db.connect();

    if (req.body) {
      Cars.create(req.body, (err, car) => {
        if (err) res.status(500).send(err);
        res.status(201).json(car);
      });
    }
  }

  update(req, res) {
    db.connect();

    const { id } = req.params;
    const carNew = req.body;

    Cars.findById(id, (err, car) => {
      if (err) res.status(500).send(err);
      Cars.updateOne(car, carNew, (err, value) => {
        if (err) res.status(500).send(err);
        res.status(200).send(value);
      });
    });
  }

  deleteOne(req, res) {

    db.connect();

    const { id } = req.params;

    Cars.findById(id, (err, car) => {
      if (err) res.status(404).send(err);
      car.remove((err, value) => {
        if (err) res.status(500).send(err);
        res.send(value);
      });
    });
  }
}

export default Car;
