const app = require("./app");
require("./database");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server on port:", PORT);
});
