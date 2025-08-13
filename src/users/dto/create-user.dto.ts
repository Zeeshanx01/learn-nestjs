// src\users\dto\create-user.dto.ts

// DTOs stand for Data Transfer Objects (schema)
// They are used to define the structure of data that is sent over the network
// In this case, we are defining the structure of a user object that will be created

import { IsString, IsEnum, IsEmail,IsNotEmpty } from "class-validator";
export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ADMIN', 'USER'],{
    message: 'Role must be one of the following: INTERN, ADMIN, USER'
  })
  role: 'INTERN' | 'ADMIN' | 'USER'

}