import { BaseServices } from "./base.services";
import {IBoardItem, ICreateBoardItem} from "../interface/services/Board.interface";

class BoardServices extends BaseServices {
    constructor () {
        super();
    }

    fetchBoards (): Promise<IBoardItem[]> {
        const uri = '/board';

        return this.get<any>(uri)
            .then(res => {
                return Promise.resolve(res.data);
            })
            .catch(err => {
                return Promise.reject();
            });
    }

    fetchBoard (index: string): Promise<IBoardItem> {
        const uri = `/board/${index}`;

        return this.get<IBoardItem>(uri)
            .then(res => Promise.resolve(res.data))
            .catch(err => Promise.reject(err));
    }

    createBoard (payload: ICreateBoardItem): Promise<IBoardItem> {
        const uri = '/board';

        return this.post<IBoardItem>(uri, payload)
            .then(res => {
                return Promise.resolve(res.data);
            })
            .catch(err => {
                return Promise.reject(err);
            });
    }

    deleteBoard (index: number) {
        const uri = `/board/${index}`;

        return this.delete<{}>(uri)
            .then(() => Promise.resolve())
            .catch(() => Promise.reject());
    }
}

export const boardServices = new BoardServices;