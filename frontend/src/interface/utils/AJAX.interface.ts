export interface IAJAXResponse<T> {
    data: T;
    status: number;
    message?: string;
    isSuccess: boolean;
}