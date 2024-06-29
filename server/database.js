const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://vansh:1234@cluster1.k821jap.mongodb.net/Dummy")

const AdminSchema = new mongoose.Schema({
    token : String,
    email : String,
    password : String
})

const UserSchema = new mongoose.Schema({
    token : String,
    email : String,
    password : String,
    fullname : String,
    phone : Number,
    flatNo : Number,
    wingNo : String,
    societyName : String
})

const FlatDetailsSchema = new mongoose.Schema({
    ownerName : String,
    flatNo : Number,
    wingNo : String
})

const NoticeDetailsSchema = new mongoose.Schema({
    noticeID : String,
    title : String,
    body : String,
})

const EmergencyNoticeSchema = new mongoose.Schema({
    noticeID : String,
    title : String,
    body : String
})

const ShopList = new mongoose.Schema({
    shopNumber : Number,
    shopName : String,
    location : String,
    description : String,
    items : [{
        itemName : String,
        itemPrice : Number
    }]
})



const Order = new mongoose.Schema({
    orderID : String,
    flatNo : Number,
    wingNo : String,
    items : [{
        itemName : String,
        itemPrice : Number,
        itemQuantity : Number
    }]

})

const EventDetailsSchema = new mongoose.Schema({
    eventName : String,
    date : Date,
    venue : String,
    registeredCandidate : [{
        fullname : String,
        phone : Number
    }]
})

const EventRegistrationForm = new mongoose.Schema({
    fullname : String,
    email : String,
    phone : Number,
    noOfPeople : Number
})

const RaiseComplaint = new mongoose.Schema({
    complaintID : String,
    title : String,
    body : String,
    raisedBy : String
})

const Admin = mongoose.model("Admin",AdminSchema)
const User = mongoose.model("User",UserSchema)
const Flat = mongoose.model("Flat",FlatDetailsSchema)
const Notice = mongoose.model("Notice",NoticeDetailsSchema)
const Emergency = mongoose.model("EmergencyNotice",EmergencyNoticeSchema)
const Shops = mongoose.model("Shops",ShopList)
const Orders = mongoose.model("Order",Order)
const Event = mongoose.model("Event",EventDetailsSchema)
const Register = mongoose.model("Registered",EventRegistrationForm)
const Complaint = mongoose.model("Complaints",RaiseComplaint)

module.exports = {
    Admin,
    User,
    Flat,
    Notice,
    Emergency,
    Shops,
    Orders,
    Event,
    Register,
    Complaint
}