export interface UserService {
  getAllUsers(): any;
  getOneUser(): any;
  addUser(user: any): any;
  updateUser(user: any): any;
  deleteUser(id: number): any;
}
