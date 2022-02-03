import {Friend, User} from "./types"
import axios from "axios";
import {sleep} from "../util";

const apiInstance = axios.create({
    baseURL : 'http://localhost:3000'
})

export const getUser = async (userId: number) : Promise<User> => {
    return (await apiInstance.get<User>(`users/${userId}`)).data;
}

export const getAllUser = async () : Promise<Array<User>> => {
    return (await apiInstance.get<Array<User>>(`users`)).data;
}

export const getFriendFromUserId = async (userId: number) : Promise<Friend>  => {
    return (await apiInstance.get<Friend>(`friends/${userId}`)).data;
}

export const getAllFriendFromUserId = async () : Promise<Array<Friend>>  => {
    return (await apiInstance.get<Array<Friend>>(`friends`)).data;
}

export const lazyApi = async <T>(item?: T) : Promise<T | undefined> => {
    (await sleep(3000));
    return item ;
}
