import { UserObject } from "../types";

export default function User(this: UserObject, id: number, username: string){
    this.id = id;
    this.username = username;
}