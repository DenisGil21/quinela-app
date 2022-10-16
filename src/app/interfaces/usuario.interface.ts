export interface Usuario {
    id: number;
    nombre?: string;
    puntaje?: number;
    email: string;
    email_verified_at?: any;
    created_at: Date;
    updated_at: Date;
}

export interface Login {
    ok: boolean;
    token: string;
    usuario: Usuario;
}

export interface LoginForm {
    email?: string | null | undefined;
    password?: string | null | undefined;
}