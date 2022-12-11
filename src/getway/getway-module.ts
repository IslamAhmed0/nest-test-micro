import {Module} from "@nestjs/common";
import {Gateway} from "./getway";


@Module({
    providers:[Gateway]
})
export class GetewayModule{}