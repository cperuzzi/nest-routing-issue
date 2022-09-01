import { Controller, Get } from '@nestjs/common';

@Controller('route')
export class RouteController {
  @Get()
  public get(): string {
    return 'hello world';
  }
}
