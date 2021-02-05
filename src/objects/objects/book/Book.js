import makeId from '../../utility/idAssigner';

/**
 * Represents a book and all acompanying materials.
 * @constructor
 * @param {object} info - Details about the book
 * @param {string} info.title - Book title.
 * @param {string} info.authors - Author of the book.
 * @param {number} info.publishedDate - Date the book was published.
 * @param {string} info.publisher - The books publisher.
 * @param {number} info.pages - Amount of pages the book has.
 * @param {string} info.thumbnail - Cover image.
 * @param {string} info.description - Blurb.
 * @param {string} info.mainCategory - Genres the book falls under.
 * @param {string} info.rating - Users rating of the book 0 - 5.
 * @param {string} volumeId - Volume identifier for Google Books.
 * @param {object} status - Stores the users reading status of the book. 
 * @param {number} progress - Represents how far through the book the reader is.
 * @param {Chapter[]} chapters - User defined chapters. 
 */
export default function Book(id, shelfId, info, volumeId, status, progress, chapters){
    this.id = id;
    this.shelfId = shelfId;
    this.info = info;
    this.volumeId = volumeId;
    this.status = status;
    this.progress = progress;
    this.chapters = chapters ? chapters : [];
}

export const formatGoogleBooksVolumeData = (data) => {

    const volumeInfo = data.volumeInfo

    const { title, authors, publishedDate, publisher, description, mainCategory } = volumeInfo

    const thumbnail = volumeInfo.hasOwnProperty('imageLinks') ? { uri: volumeInfo.imageLinks.thumbnail } : require('../../../assets/images/2x/book.png')

    const info = {
        title,
        authors,
        publishedDate,
        publisher,
        description,
        mainCategory,
        thumbnail,
        rating: 0,
    }

    const volumeId = data.id

    return {...new Book(null, null, info, volumeId, null, null, null)}
}