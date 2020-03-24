export interface IPost {
    title : string,
    content: string,
    author: string,
    id? : any
}

export const EMPTY_POST_ARRAY : Array<IPost> = [];