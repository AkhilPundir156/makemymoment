import NextAuth from "next-auth";
import { nextUser, nextSession } from "@makemymoment/types";

declare module "next-auth" {
    interface Session {
        user: nextUser & { image?: string };
    }
    interface User extends nextUser {}
}
