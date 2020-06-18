const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductSchema = new mongoose.Schema({
    NomeSite:{
        type: String,
        required: true,
    },
    ContatoSite:{
        type: String,
        required: true,
    },
    EmailSite:{
        type: String,
        required: true,
    },
    TelefoneSite:{
        type: String,
        required: true,
    },
    DescricaoSite:{
        type: String,
        required: true,
    },
    EmailVinculo:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

ProductSchema.plugin(mongoosePaginate);

mongoose.model("contacts", ProductSchema);