export interface ICreateUser {
    name: string 
    email: string 
    password: string 
}

export interface ILoginUser {
    email: string 
    password: string
}

export interface IUser {
    loading: "idle" | "pending" | "succeeded" | "failed"
    user: any
}