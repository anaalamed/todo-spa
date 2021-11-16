export interface Todo {
    id: string
    title: string
    description?: string
    completed: boolean
    important: boolean
    color: string
    userId: string
    createdAt: Date
    updatedAt?: Date
}

export interface User {
    id?: string
    email?: string
    name?: string
    phoneNumber?: string
    photoURL?: string
    about?: string
}