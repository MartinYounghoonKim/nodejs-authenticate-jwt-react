import { BaseServices } from "./base.services";
import {IBoardItem, ICreateBoardItem} from "../interface/services/Board.interface";

class BoardServices extends BaseServices {
    constructor () {
        super();
    }

    public fetchBoard (): Promise<IBoardItem[]> {
        const uri = '/board';

        return this.get<any>(uri)
            .then(res => {
                return Promise.resolve(res.data);
            })
            .catch(err => {
                return Promise.reject();
            });
    }

    public createBoard (payload: ICreateBoardItem): Promise<IBoardItem> {
        const uri = '/board';

        return this.post<IBoardItem>(uri, payload)
            .then(res => {
                return Promise.resolve(res.data);
            })
            .catch(err => {
                return Promise.reject(err);
            });
    }

    public deleteBoard (index: number) {
        const uri = `/board/${index}`;

        return this.delete<{}>(uri)
            .then(() => Promise.resolve())
            .catch(() => Promise.reject());
    }
}

export const boardServices = new BoardServices;