import mongoose from "mongoose";

import getEnvVar from "@makemymoment/utils/config";

let globalConnection: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } = {
    conn: null,
    promise: null,
};

async function connectToDatabase() {
    if (globalConnection.conn) {
        return globalConnection.conn;
    }

    if (!globalConnection.promise) {
        globalConnection.promise = mongoose.connect(getEnvVar("MONGODB_URI")).then((mongoose) => {
            return mongoose;
        });
    }

    globalConnection.conn = await globalConnection.promise;
    return globalConnection.conn;
}

export default connectToDatabase;


export class akhil{


}