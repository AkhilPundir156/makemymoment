import mongoose from "mongoose";
import getEnvVar from "@makemymoment/utils/config";

class DbConnection {
    static globalConnection: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    } = {
        conn: null,
        promise: null,
    };

    static async _getInstance() {
        if (this.globalConnection.conn) {
            return this.globalConnection.conn;
        }

        if (!this.globalConnection.promise) {
            this.globalConnection.promise = mongoose
                .connect(getEnvVar("MONGODB_URI"))
                .then((mongoose) => mongoose);
        }

        this.globalConnection.conn = await this.globalConnection.promise;
        return this.globalConnection.conn;
    }
}

const dbInstance = DbConnection;

export default dbInstance;
