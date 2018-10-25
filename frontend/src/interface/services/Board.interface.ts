import { BaseServices } from "../../services/base.services";

export interface ICreateBoardItem {
    title: string;
    content: string;
}

export interface IBoardItem {
    upk: number;
    index: number;
    user: string;
    title: string;
    content: string;
    regdate: string;
}

