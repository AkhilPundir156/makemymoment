import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import getEnvVar from "@makemymoment/utils/config";

export const authOptions = {
    providers: [
        Google({
            clientId: getEnvVar("GOOGLE_ID"),
            clientSecret: getEnvVar("GOOGLE_SECRET"),
        }),
    ],
};

export default NextAuth(authOptions);
