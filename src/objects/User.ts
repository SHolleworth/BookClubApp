
export interface UserObject {
    id: number | null,
    username: string | null
}

export default function User(this: UserObject, id: number, username: string){
    this.id = id;
    this.username = username;
}