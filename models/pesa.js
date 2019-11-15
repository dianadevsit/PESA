const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pesaSchema = new Schema({
  // From Indeed
  company_name: { type: String, required: true },
  description: { type: String, required: true },
  location: {type: String, required: true  },
  position: { type: String, required: true },
  // Updated when user edits
  application_date: { type: Date, default: null },
  documents: {type: String, default: ""}
});

const Pesa = mongoose.model("Pesa", pesaSchema);

module.exports = Pesa;
