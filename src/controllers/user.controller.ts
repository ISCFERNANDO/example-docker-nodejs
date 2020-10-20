export class UserController {
  constructor() {}

  public getAllUsers(request: any, response: any): void {
    const listOfUsers: any = [];
    response.status(200).send({ message: null, data: listOfUsers });
  }

  public getOneUser(request: any, response: any): void {
    response.status(200).send({
      message: null,
      data: { id: 1, name: "Luis Fernando Prudencio Cruz" },
    });
  }

  public addUser(request: any, response: any): void {
    const newUser = request.body || null;
    response
      .status(200)
      .send({ message: "El usuario se agregó correctamente", data: newUser });
  }

  public updateUser(request: any, response: any): void {
    const newUser = request.body || null;
    response.status(200).send({ message: null, data: newUser });
  }

  public deleteUser(request: any, response: any): void {
    response.status(200).send({
      message: null,
      data: { id: 1, name: "Luis Fernando Prudencio Cruz" },
    });
  }
}
