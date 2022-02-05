export type User = {
    id: number
    name: string
};

export type Users = User[];

export type Friend = {
    frienduserId : number;
} & User;
