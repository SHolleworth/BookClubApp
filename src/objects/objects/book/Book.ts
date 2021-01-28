import makeId from '../../utility/idAssigner';

export interface BookInfo {
    title: string;
    author: string;
    published: number;
    publisher: string;
    pages: number;
    imgPath: string;
    description: string;
    genres: string[];
    rating: ratingType;
}

export interface BookStatus {
    finished: boolean;
    reading: boolean;
    owned: boolean;
    favourite: boolean;
}

export interface BookChapter {
    _id: string;
    _name: string;
}

export interface BookObject {
    _id: string;
    _info: BookInfo;
    _volumeID: string;
    _status: BookStatus;
    _progress: number;
    _chapters: BookChapter[];
}

type ratingType = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Represents a book and all acompanying materials.
 * @constructor
 * @param {object} info - Details about the book
 * @param {string} info.title - Book title.
 * @param {string} info.author - Author of the book.
 * @param {number} info.published - Date the book was published.
 * @param {string} info.publisher - The books publisher.
 * @param {number} info.pages - Amount of pages the book has.
 * @param {string} info.imgPath - Cover image.
 * @param {string} info.description - Blurb.
 * @param {string} info.genres - Genres the book falls under.
 * @param {string} info.rating - Users rating of the book 0 - 5.
 * @param {string} volumeID - Volume identifier for Google Books.
 * @param {object} status - Stores the users reading status of the book. 
 * @param {number} progress - Represents how far through the book the reader is.
 * @param {Chapter[]} chapters - User defined chapters. 
 */
export default function Book(this: any, 
id: string,
info: BookInfo,
volumeID: string,
status: BookStatus,
progress: number, 
chapters: BookChapter[]){
    this.id = id ? id : makeId();
    this.info = info;
    this.volumeID = volumeID;
    this.status = status;
    this.progress = progress;
    this.chapters = chapters ? chapters : [];
}