const db = require("mongoose");

let categoriesSchema = new db.Schema({
  category_nm: { type: String, required: true },
});

module.exports = db.model("categories", categoriesSchema);
