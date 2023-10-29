import express from "express";
import router from "./routes";
import fibonacci from "./routes/fibonacci";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use("/fibonacci", fibonacci);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
