export interface Message {
  message: string;
}

export interface MyForm {
  email: string;
  firstName: string;
  lastName: string;
  oneImage?: File | Blob;
  anotherImage?: File | Blob;
}
