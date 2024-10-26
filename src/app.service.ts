import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);


  getHello() {
    return { message: 'Hello World! v2', env: process.env };
  }

  @Cron('45 * * * * *')
  handleCron() {
    console.log('console: called when the current second is 45')
    this.logger.debug('logger: called when the current second is 45');
  }
}
