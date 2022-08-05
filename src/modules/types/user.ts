export interface ICreateUser {
    name: string 
    email: string 
    password: string 
}

export interface IRegGoogleData {
    name: string | null
    email: string | null
    uid: string | null
    surfingBalance: string
    advertisingBalance: string
}

export interface ILoginUser {
    email: string 
    password: string
}

export interface IUser {
    loading: "idle" | "pending" | "succeeded" | "failed"
    user: any
}