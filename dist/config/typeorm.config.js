"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfigAsync = void 0;
const config_1 = require("@nestjs/config");
class TypeOrmConfig {
    static getOrmConfig(configservice) {
        return {
            type: 'postgres',
            host: configservice.get('DB_HOST'),
            port: configservice.get('DB_PORT'),
            username: configservice.get('DB_USERNAME'),
            password: configservice.get('DB_PASSWORD'),
            database: configservice.get('DB_NAME'),
            entities: ["dist/**/*.entity{.ts,.js}"],
            synchronize: true,
        };
    }
}
exports.default = TypeOrmConfig;
exports.typeOrmConfigAsync = {
    imports: [config_1.ConfigModule],
    useFactory: async (configservice) => TypeOrmConfig.getOrmConfig(configservice),
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=typeorm.config.js.map