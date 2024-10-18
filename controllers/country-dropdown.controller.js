const Country = require("../models/country-dropdown.model");

const addCountry = async (req, res) => {
  try {
    const { name, value } = req.body;

    const country = new Country({ name, value });

    const data = await country.save();

    return res.status(201).json({
      message: "Country added to dropdown",
      data: data._id,
    });
  } catch (error) {
    console.log("Error in adding country", error);
  }
};

const getCountries = async (req, res) => {
  try {
    const data = await Country.find({});

    if (!data) return res.status(404).json({ message: "No data found!" });

    return res.status(200).json(data);
  } catch (error) {
    console.log("error in fetching", error);
  }
};

module.exports = { addCountry, getCountries };
