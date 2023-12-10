import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  ping(): string {
    return this.appService.pong();
  }

  @Get('/score')
  async getScore(@Query() query: any) {
    return this.appService.getScore(query.address);
  }
}
