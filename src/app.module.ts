import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {UserModule} from "./user/user.module";
import {ConfigModule} from "@nestjs/config";
import {typeOrmConfigAsync} from "./config/typeorm.config";
import {TypeOrmModule} from "@nestjs/typeorm";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
