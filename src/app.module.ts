import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { CartModule } from './cart/cart.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, CartModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
