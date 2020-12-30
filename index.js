const mongoose = require("mongoose");

module.exports = (Schema, Definition) => {
    return new mongoose.Schema(Definition).add(Schema);
}