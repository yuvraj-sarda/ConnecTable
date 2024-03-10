import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        eateryId: {
            type: String,
            required: true
        },
        interests: {
            type: [String],
            required: true
        },
        okayOutsideInterests: {
            type: Boolean,
            required: true
        },
        conversationType: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        outfit: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        }
    }, 
    {
        timestamps: true // adds createdAt and updatedAt fields to the document
    }
); 

// Create a model for the user, if it doesn't exist already (models are stored upon compilation).
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;