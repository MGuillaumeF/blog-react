export interface IPost {
    title : string,
    content: string,
    author: string,
    id? : number,
    onclick? : any,
}

export const EMPTY_POST_ARRAY : Array<IPost> = [];
export const EMPTY_POST : IPost = {title : '', content : '', author : ''};
export const NO_ID : any = null;