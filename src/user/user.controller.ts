import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import path from "path";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{

    constructor( private userService: UserService){};

    // @Post('crete')
    // async addUser(@Body() user: User){
    //     return this.userService.create(user);
    // }

    // @Get('users')
    // async getAll (){
    //     return this.userService.getlist();
    // }

    // @Get('user/:id')
    // async getOne (@Param('id') id:  number ){
    //     return this.userService.getOne(id);
    // }

    // @Put('edit/:id')
    // async Update(@Param('id') id: number, @Body() user: User) {
    //     return this.userService.edit(id, user);
    // }
}