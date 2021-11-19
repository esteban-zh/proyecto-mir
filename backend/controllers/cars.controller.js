import db from "../config/db.js";
import { Cars } from "../models/index.js";

class Car {

    constructor(){

        this.name= "",
        this.price="",
        this.capacity=''
    }

    getAll(req, res) {

    db.connect();

     Cars.find((err, data) => {
        console.log("find", data);
        if (err) res.status(500).send();
        if (data.length ===0) res.status(204).send();
        res.status(200).send(data);
    });
    }

    getOne(req, res) {

    db.connect();

    const id= req.params.id;

    Cars.findById(id, (err,data) => {
        
        if(err) res.sendStatus(404);
        res.status(200).json(data);
    });
    }
}

export default Car;