import { IUser } from "./user";

export interface IMeme {
    themeName: string;
    ownerId: IUser;
    created_at: Date;
    updated_at: Date;
    categoryId: string;
    postLikes: number;
    comments: JSON;
}