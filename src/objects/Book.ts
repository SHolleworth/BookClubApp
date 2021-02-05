
export interface BookInfoObject {
    id: number | null,
    title: string,
    authors: string[],
    publisher: string,
    publishedDate: string,
    description: string,
    mainCategory: string,
    thumbnail: string,
}

export interface BookObject {
    id: number | null,
    info: BookInfoObject,
    shelfId: number | null,
    volumeId: string,
}

export default function Book(this: BookObject, id : number, shelfId: number, info: BookInfoObject, volumeId: string){
    this.id = id;
    this.info = info;
    this.shelfId = shelfId;
    this.volumeId = volumeId;
}

export const formatGoogleBooksVolumeData = (data: any) => {

    const volumeInfo = data.volumeInfo

    const { title, authors, publishedDate, publisher, description, mainCategory } = volumeInfo

    const thumbnail = volumeInfo.hasOwnProperty('imageLinks') ? volumeInfo.imageLinks.thumbnail : '../../../assets/images/2x/book.png'

    const info: BookInfoObject = {
        id: null,
        title,
        authors,
        publishedDate,
        publisher,
        description,
        mainCategory,
        thumbnail,
    }

    const id = null

    const shelfId = null

    const volumeId = data.id

    const book: BookObject = { id, info, shelfId, volumeId }

    return book

}