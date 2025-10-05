import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import getEnvVar from "@makemymoment/utils/config";

console.log(getEnvVar("GOOGLE_ID"));
console.log(getEnvVar("GOOGLE_SECRET"));

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: getEnvVar("GOOGLE_ID"),
            clientSecret: getEnvVar("GOOGLE_SECRET"),
        }),
    ],
});

export { handler as GET, handler as POST };
