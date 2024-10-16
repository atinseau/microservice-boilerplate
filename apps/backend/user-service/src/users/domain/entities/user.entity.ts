

export class User {
  constructor(
    public readonly id: number,
    public readonly firstName: string,
    public readonly fullName: string,
    public readonly email: string,
    private readonly password: string,
  ) {}
}