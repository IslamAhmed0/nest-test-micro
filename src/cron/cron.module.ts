import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import {UserModule} from "../user/user.module";

@Module({
    providers: [CronService],
    imports:[UserModule]
})
export class CronModule {}