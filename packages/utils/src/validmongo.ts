import mongoose from "mongoose";

const isValidDbId = (id: string) => {
    return mongoose.isValidObjectId(id);
};

export default isValidDbId;
