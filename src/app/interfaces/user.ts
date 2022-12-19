export interface IUser{
    memes: string[];
    _id: string;
    username: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    natoinality: string;
    gender: "Класически българин";
    birthDate: Date;
    isValidated: boolean;
}