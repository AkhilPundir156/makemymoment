export interface IUser {
    name: string;
    emailId: string;
    image?: string;
    cliSecret: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IVideo {
    userId: IUser;
    videoUrl: string;
    shareVideUrl: string;
    publicVisibility: Boolean;
    videDescription: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface nextUser {
    id: string;
    name: string;
    email: string;
    image?: string;
}
