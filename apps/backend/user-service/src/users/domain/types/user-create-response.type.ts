import { Observable } from "rxjs";

export type UserCreateResponse = Observable<{
  id: number
  message: string
}>