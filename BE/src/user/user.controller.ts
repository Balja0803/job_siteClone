import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { User } from './user.schema';
import { Response } from 'express';
import { create } from 'domain';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('add')
  createUser(@Body() body: UserDto): Promise<User> {
    console.log('request body', body);
    return this.userService.addUser(body);
  }

  // @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() UserDto: UserDto) {
    return this.userService.signIn(UserDto.email, UserDto.password);
  }

  @Get('/:id')
  getUser(@Param('id') id: string) {
    return this.userService.findUser(id);
  }
}
