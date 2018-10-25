export interface ICreateBoardItem {
    title: string;
    content: string;
}

export interface IBoardItem {
    upk: string;
    index: number;
    uid: string;
    title: string;
    content: string;
    regdate: Date;
}