export type User = {
    id: number
    name: string
};

export type Friend = {
    frienduserId : number;
} & User;
