import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensure no duplicates
        match: [/.+\@.+\..+/, 'Please provide a valid email address']
      },      
    date: {
        type: Date,
        default: () => Date.now() // Ensure it gets the current date each time a document is created
    }
});

const EmailModel = mongoose.models.Email || mongoose.model('Email', Schema);

export default EmailModel;
