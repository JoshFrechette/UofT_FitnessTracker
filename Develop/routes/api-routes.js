var path = require("path");
var db = require("../models")

function apiRoutes(app) {
    app.get("/", function (req, res){
        res.sendFile(path.join(__dirname , "../public/index.html"))
    })
    app.post("/api/workouts", function (req, res) {

        console.log("This is a workout",req.body);

        db.Workout.create(req.body).then(function (data){

            console.log("ID", data._id )
            db.Workout.findOneAndUpdate({ _id: data._id }, { $push: { exercises: req.body } },function(error, success){
                res.json(success)
            })
                
        })
    })
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    })
} 



module.exports = apiRoutes;