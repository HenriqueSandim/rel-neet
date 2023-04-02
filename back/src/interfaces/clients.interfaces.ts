export interface IClientRequest {
    fullName: string
    email: string
    password: string
    phoneNumber: string
    description?: string | null
}

export interface IClient {
    id: string
    fullName: string
    email: string
    password?: string
    phoneNumber: string
    description?: string | null
    createdAt: Date
}

export interface IClientLogin {
    email: string
    password: string
}