const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
// const MONGODB_URI = 'mongodb+srv://Josh0422:GlobeHolder@jfdcluster-28xnz.gcp.mongodb.net/test?retryWrites=true&w=majority';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://Josh0422:GlobeHolder@jfdcluster-28xnz.gcp.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// mongoose.connect(MONGODB_URI || "mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// routesvar
var apiRoutes = require("./routes/api-routes");
apiRoutes(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});