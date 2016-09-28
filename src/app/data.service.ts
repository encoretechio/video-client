import { Injectable } from '@angular/core';
import { User } from './models/user';
import { LoginDetails } from './models/login-details';
import { USERS } from './mock-data/users';

@Injectable()
export class DataService {

  constructor() { }
  validateLogin(loginDetails: LoginDetails): Promise<User[]> {
  return Promise.resolve(USERS);
  }

}
