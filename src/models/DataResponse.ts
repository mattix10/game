export interface DataResponse<T> {
  message: string;
  result: Result<T>;
}

export interface Result<T> {
  properties: T;
  description: string;
  _id: string;
  uid: string;
  __v: string;
}
