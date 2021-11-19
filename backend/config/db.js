import mongoose from "mongoose";

const db = {
    connect: function(){
        
mongoose.connect('mongodb://localhost:27017/cars_rental', { useNewUrlParser: true });

mongoose.connection.on("error", function(e) { console.error(e); });

    }
}

export default db;