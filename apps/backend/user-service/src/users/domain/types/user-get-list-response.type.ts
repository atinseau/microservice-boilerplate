import { Observable } from "rxjs";
import { User } from "../entities/user.entity";

export type UserGetListResponse = Observable<User[]> 