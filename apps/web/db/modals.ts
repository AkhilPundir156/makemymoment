import mongoose, { Schema, models, Model } from "mongoose";

import type { IUser, IVideo } from "@makemymoment/types";

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            require: true,
        },
        emailId: {
            type: String,
            require: true,
            unique: true,
        },
        googleId: {
            type: String,
            require: true,
            unique: true,
        },
        image: {
            type: String,
        },

        // cli config secrete to check user is verified. When hiting backend using CLI.
        cliSecret: {
            require: true,
            type: String,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

const videoSchema = new Schema<IVideo>(
    {
        userId: {
            type: Schema.ObjectId,
            require: true,
            ref: "User",
        },
        videoUrl: {
            type: String,
            unique: true,
            require: true,
        },
        shareVideUrl: {
            type: String,
            require: true,
            unique: true,
        },
        publicVisibility: {
            type: Boolean,
            require: true,
            default: false,
        },
        videDescription: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

const User: Model<IUser> = models.User || mongoose.model<IUser>("User", userSchema);
const Video: Model<IVideo> = models.Video || mongoose.model("Video", videoSchema);

export { User as UserModel, Video as VideoModel };
