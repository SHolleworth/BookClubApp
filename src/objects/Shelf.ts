import { ShelfObject } from "../../../types";

export default function Shelf(this: ShelfObject, id: number, userId: number, name: string) {
    this.id = id;
    this.userId = userId;
    this.name = name;
}