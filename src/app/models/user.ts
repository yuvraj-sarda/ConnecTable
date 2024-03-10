import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        interests: {
            type: [String],
            required: true
        },
        location: {
            type: String
        }
    }, 
    {
        timestamps: true // adds createdAt and updatedAt fields to the document
    }
); 

// Create a model for the user, if it doesn't exist already (models are stored upon compilation).
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;