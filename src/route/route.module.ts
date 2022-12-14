import { Module } from '@nestjs/common';
import { RouteController } from './route/route.controller';

@Module({
  controllers: [RouteController]
})
export class RouteModule {}
