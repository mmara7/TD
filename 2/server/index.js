var api = require("./src/api.js").app;
const { request } = require("express");
var users = require("./src/users.json");

api.get("/", function (request, response) {
  response.json("NodeJS REST API");
});

// http://localhost:3000/

api.get("/users", function (request, response) {
  response.json(users);
});

// http://localhost:3000/

api.listen(3000, function () {
  console.log("Server running @ localhost:3000");
});

api.del("/deleteUser", function(request, response) {
  const body = request.body;
  var currentIndex = null;
  console.log(request);
  users.forEach((item, index) =>
  {
    if(body.name == item.name)
    {
      currentIndex = index;
    }
  }
  )
  console.log(currentIndex);
    users.splice(currentIndex, 1);
    response.json(users);
});

api.add("/addUser", function(request, response){
  const body = request.body;
  users.push(body);
  response.json(users);
}
);

api.up("/updateUser/:index", function(request, response) {

  const index = request.params.index;
  console.log(index)
  const updateUser = request.body;
  console.log(updateUser)
  users[index] = updateUser;
  response.json(users[index]);
}
)