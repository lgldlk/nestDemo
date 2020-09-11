import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtDemoModule } from './jwt-demo/jwt-demo.module';

@Module({
  imports: [JwtDemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
