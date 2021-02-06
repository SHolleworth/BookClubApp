export interface UserObject {
    id: number | null,
    username: string | null
}

export interface ShelfObject {
    id: number,
    userId: number,
    name: string,
}

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

export interface UserStateObject {
    currentUser: UserObject
}

export interface UiStateObject {
    tabWidth: number | null,
    showingBookDetailWindow: boolean
    bookForDetailWindow: BookObject | null,
    showingAddBookDialogue: boolean,
    bookForAddBookDialogue: BookObject | null
}

export interface ShelfStateObject {
    shelves: ShelfObject[],
    status: string,
    error: string | null
}

export interface NavStateObject {
    tab: number
}

