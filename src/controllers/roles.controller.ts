export class RolesController {
  public getAllRoles(request: any, response: any): void {
    const listOfRoles: any = [];
    response.status(200).send({ message: null, data: listOfRoles });
  }

  public getOneRol(request: any, response: any): void {
    response.status(200).send({
      message: null,
      data: { id: 1, name: "Administrador" },
    });
  }

  public addRol(request: any, response: any): void {
    const newUser = request.body || null;
    response
      .status(200)
      .send({ message: "El rol se agregó correctamente", data: newUser });
  }

  public updateRol(request: any, response: any): void {
    const newRol = request.body || null;
    response.status(200).send({ message: null, data: newRol });
  }

  public deleteRol(request: any, response: any): void {
    response.status(200).send({
      message: null,
      data: { id: 1, name: "Rol" },
    });
  }
}
