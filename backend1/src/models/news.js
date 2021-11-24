const mongoose = require("mongoose");
const newsSchema = mongoose.Schema({
  source: {
    type: String,
  },
  source_id: {
    type: String,
  },

  title: {
    type: String,
    Required: true,
  },

  description: {
    type: String,
    Required: true,
  },

  // thematique: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Thematiques",
  //   Required: false,
  // },

  image_url: {
    type: String,
  },

});

module.exports = mongoose.model("News", newsSchema);
