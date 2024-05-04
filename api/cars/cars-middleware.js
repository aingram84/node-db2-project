const Car = require("./cars-model");
const db = require("../../data/db-config");

const checkCarId = (req, res, next) => {
  const err = { satus: 404 };
    const id = req.params.id;
  if (id === undefined) {
    res.status(404).json({
      message: `car with id ${id} is not found`,
    });
  } else {
    next();
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
