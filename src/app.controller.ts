import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';

@Controller('app')
export class AppController {
    constructor(private appService: AppService){}

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        return req.user;
    }

    @UseGuards(AuthenticatedGuard)
    @Get('protected')
    getHello(@Request() req):string {
        return req.user;
    }
}
