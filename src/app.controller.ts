import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): unknown {
    return this.appService.getHello();
  }

  @Get('/ping')
  ping(): unknown {
    return 'Ping from nestjs hosted on Vercel';
  }
}
