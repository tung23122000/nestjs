import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    // @Post('login')
    // singup(){
    //     return this.authService.login();
    // }

    // @Post('logout')
    // singout(){
    //     return this.authService.logout();
    // }
}
