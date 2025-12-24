export interface IDBResponseDT<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}
