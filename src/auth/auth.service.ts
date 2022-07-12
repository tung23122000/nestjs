import {  Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{

    login (){
        return { mgs: "this is a login"}
    }

    logout(){
        return {mgs: "this is a logout"}
    }
}