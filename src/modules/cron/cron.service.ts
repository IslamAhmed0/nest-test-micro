import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import {UserService} from "../user/user.service";

@Injectable()
export class CronService {
    constructor(private userservice:UserService) {
    }
    private readonly logger = new Logger(CronService.name);

    @Cron('45 * * * * *')
   async handleCron() {
      // console.log(await this.userservice.findAll());
        this.logger.debug('Called when the second is 45');
    }

    @Interval(10000)
    async handleInterval() {
       // console.log(await this.userservice.findAll());

        this.logger.debug('Called every 10 seconds');
    }

    @Timeout(5000)
    handleTimeout() {
        this.logger.debug('Called once after 5 seconds');
    }
}