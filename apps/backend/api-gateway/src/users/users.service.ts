import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { USERS_SERVICE, USERS_SERVICE_NAME } from "shared";


@Injectable()
export class UsersService {

  constructor(@Inject(USERS_SERVICE_NAME) private usersClient: ClientProxy) { }

  getList() {
    return this.usersClient.send(USERS_SERVICE.GET_LIST, {})
  }

}