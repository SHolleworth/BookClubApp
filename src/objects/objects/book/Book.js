"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var idAssigner_1 = __importDefault(require("../../utility/idAssigner"));
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
function Book(id, info, volumeID, status, progress, chapters) {
    this.id = id ? id : idAssigner_1.default();
    this.info = info;
    this.volumeID = volumeID;
    this.status = status;
    this.progress = progress;
    this.chapters = chapters ? chapters : [];
}
exports.default = Book;
