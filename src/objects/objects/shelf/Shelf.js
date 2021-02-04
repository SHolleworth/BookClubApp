import {BookObject} from '../book/Book';
import makeId from '../../utility/idAssigner';

/**
 * Represents a book shelf.
 * @constructor
 * @param {object} info - The info object for the shelf.
 * @param {string} info.name - The name of the shelf.
 * @param {Book[]} books - The books in the shelf.
 */
export default function Shelf(id, userId, info) {
    this.id = id ? id : makeId();
    this.userId = userId;
    this.info = info;
}