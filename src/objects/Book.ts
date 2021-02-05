
export interface BookInfoObject {
    id: number,
    title: string,
    authors: string[],
    publisher: string,
    publishedDate: string,
    description: string,
    mainCategory: string,
    thumbnail: string,
}

export interface BookObject {
    id: number,
    shelfId: number,
    info: BookInfoObject,
    volumeId: string,
}

export default function Book(this: BookObject, id : number, shelfId: number, info: BookInfoObject, volumeId: string){
    this.id = id;
    this.shelfId = shelfId;
    this.info = info;
    this.volumeId = volumeId;
}

export const formatGoogleBooksVolumeData = (data: any) => {

    const volumeInfo = data.volumeInfo

    const { title, authors, publishedDate, publisher, description, mainCategory } = volumeInfo

    const thumbnail = volumeInfo.hasOwnProperty('imageLinks') ? volumeInfo.imageLinks.thumbnail : '../../../assets/images/2x/book.png'

    const info = {
        title,
        authors,
        publishedDate,
        publisher,
        description,
        mainCategory,
        thumbnail,
    }

    const volumeId = data.id

    return {...new Book(null, null, info, volumeId, null, null, null)}
}