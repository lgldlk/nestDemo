import { JwtDemoService } from './jwt-demo.service';
import { JwtService } from '@nestjs/jwt';
import { Controller, UseGuards, Get, Post, Req, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Controller('')
export class JwtDemoController {
  JwtDemoService: any;
  constructor(private readonly jwtDemoService: JwtDemoService){}
  //使用jwt验证token的端口
  @UseGuards( AuthGuard('jwt'))
  @Post('tokenIn')
  aPost(@Req() req){
    return req.user;
  }
  @Post('getToken')
    getTokenByUserId(
            @Body() user: any,
    ){
      return this.jwtDemoService.createToken(user);
    }
}
