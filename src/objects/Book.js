"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatGoogleBooksVolumeData = void 0;
function Book(id, shelfId, info, volumeId) {
    this.id = id;
    this.info = info;
    this.shelfId = shelfId;
    this.volumeId = volumeId;
}
exports.default = Book;
exports.formatGoogleBooksVolumeData = function (data) {
    var volumeInfo = data.volumeInfo;
    var title = volumeInfo.title, authors = volumeInfo.authors, publishedDate = volumeInfo.publishedDate, publisher = volumeInfo.publisher, description = volumeInfo.description, mainCategory = volumeInfo.mainCategory;
    var thumbnail = volumeInfo.hasOwnProperty('imageLinks') ? volumeInfo.imageLinks.thumbnail : '../../assets/images/2x/bookShadow.png';
    var info = {
        id: null,
        bookId: null,
        title: title,
        authors: authors,
        publishedDate: publishedDate,
        publisher: publisher,
        description: description,
        mainCategory: mainCategory,
        thumbnail: thumbnail,
    };
    var id = null;
    var shelfId = null;
    var volumeId = data.id;
    var book = { id: id, info: info, shelfId: shelfId, volumeId: volumeId };
    return book;
};
