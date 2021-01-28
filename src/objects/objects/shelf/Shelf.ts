import {BookObject} from '../book/Book';
import makeId from '../../utility/idAssigner';

export interface ShelfObject {
    id: string;
    info: {name: string, color: string};
    books: BookObject[]; 
}

export interface ShelfInfo {
    name: string;
    color: string;
}

/**
 * Represents a book shelf.
 * @constructor
 * @param {object} info - The info object for the shelf.
 * @param {string} info.name - The name of the shelf.
 * @param {string} info.color - The color of the shelf.
 * @param {Book[]} books - The books in the shelf.
 */
export default function Shelf(this: any, id: string, info: ShelfInfo, books: BookObject[]) {
    this.id = id ? id : makeId();
    this.info = info;
    this.books = books ? books : [];
}