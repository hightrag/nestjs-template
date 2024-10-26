import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);


  getHello() {
    return 'Hello World! v3';
  }

  @Cron('45 * * * * *')
  handleCron() {
    console.log('console: called when the current second is 45')
    this.logger.debug('logger: called when the current second is 45');
  }
}
