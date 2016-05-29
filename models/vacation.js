var Schema       = mongoose.Schema;

var vacationSchema   = new Schema({
    _id: Number,
    name: String,
    country: String,
    date: Date,
    duration: String,

});

module.exports = mongoose.model('Vacation', vacationSchema);
