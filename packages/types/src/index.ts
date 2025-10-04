export interface IUser {
    name: string;
    emailId: string;
    googleId: string;
    image?: string;
    cliSecret: string;
}

export interface IVideo {
    userId: IUser;
    videoUrl: string;
    shareVideUrl: string;
    publicVisibility: Boolean;
    videDescription: string;
}
