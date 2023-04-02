export interface IContactRequest {
    fullName: string
    email: string
    phoneNumber: string
    description?: string | null
}

export interface IContacts {
    id: string
    fullName: string
    email: string
    phoneNumber: string
    description?: string | null
    createdAt: Date
    client: string
}