export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

export type Role = "admin" | "editor" | "viewer";

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: string;
}
