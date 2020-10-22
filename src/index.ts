import app from "./app";
import initModels from "./models/init-models";
import Sequelize from "./utils/sequelize-connection";

function main() {
  const port = process.env.PORT || 3000;
  app.listen(port);

  console.log("Server is running on port ", port);
  initModels(Sequelize);
}
main();
