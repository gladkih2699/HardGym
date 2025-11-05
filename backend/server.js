const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const uploadDir = "../frontend/public/uploads";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const types = ["image/png", "image/jpeg", "image/jpg"];
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const Record = sequelize.define("Record", {
  record_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Review = sequelize.define("Review", {
  review_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  review_text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Coach = sequelize.define("Coach", {
  coach_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  coach_desc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const Train = sequelize.define("Train", {
  train_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  direction: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  hall: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  coach_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: true,
  },
});

const app = express();
app.use(cors());
app.use(express.json());

sequelize
  .sync()
  .then(() => {
    console.log("База данных синхронизирована!");
  })
  .catch((error) => {
    console.error("Ошибка синхронизации БД:", error);
  });

app.post("/coaches", upload.single("image"), async (request, response) => {
  try {
    const { first_name, last_name, coach_desc } = request.body;
    const image_url = request.file ? request.file.filename : null;
    const newCoach = await Coach.create({
      first_name,
      last_name,
      coach_desc,
      image_url,
    });
    response.status(201).json(newCoach);
  } catch (error) {
    console.log("Er", error.message);
    response.status(500).json({ error: error.message });
  }
});

app.get("/coaches", async (request, response) => {
  try {
    const coaches = await Coach.findAll();
    response.json(coaches);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
});

app.post("/records", async (request, response) => {
  console.log("123");
  try {
    const { name, phone } = request.body;
    const newRecord = await Record.create({
      name,
      phone,
    });
    response.status(201).json(newRecord);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
});

app.post("/reviews", async (request, response) => {
  console.log("123");
  try {
    const { name, phone, review_text } = request.body;
    const newReview = await Review.create({
      name,
      phone,
      review_text,
    });
    response.status(201).json(newReview);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
});

app.get("/reviews", async (request, response) => {
  try {
    const reviews = await Review.findAll({
      order: [["createdAt", "DESC"]],
      limit: 3,
    });
    response.json(reviews);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
});

app.post("/trains", async (request, response) => {
  try {
    const { direction, hall, coach_name, date, time } = request.body;
    const newTrain = await Train.create({
      direction,
      hall,
      coach_name,
      date,
      time,
    });
    response.status(201).json(newTrain);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
});

app.get("/trains", async (request, response) => {
  try {
    const trains = await Train.findAll();
    response.json(trains);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log("Сервер запущен");
});
