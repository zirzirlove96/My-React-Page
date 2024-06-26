"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const common_service_1 = require("./common.service");
const common_1 = require("@nestjs/common");
const common_controller_1 = require("./common.controller");
const typeorm_1 = require("@nestjs/typeorm");
const LoginSiteRepository_1 = require("../respository/LoginSiteRepository");
const login_site_entity_1 = require("../entities/login_site.entity");
const config_1 = require("@nestjs/config");
const take_order_special_1 = require("../entities/take_order_special");
const TakeOrderSpecialRepository_1 = require("../respository/TakeOrderSpecialRepository");
const order_cmt_1 = require("../entities/order_cmt");
const auto_order_1 = require("../entities/auto_order");
const auto_order_misc_1 = require("../entities/auto_order_misc");
const AutoOrderRepository_1 = require("../respository/AutoOrderRepository");
const AutoOrderMiscRepository_1 = require("../respository/AutoOrderMiscRepository");
const OrderCmtRepository_1 = require("../respository/OrderCmtRepository");
let CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Module)({
        controllers: [common_controller_1.CommonController],
        providers: [
            common_service_1.CommonService,
            TakeOrderSpecialRepository_1.TakeOrderSpecialRepository,
            LoginSiteRepository_1.LoginSiteRespository,
            OrderCmtRepository_1.OrderCmtRepositiory,
            AutoOrderRepository_1.AutoOrderRepository,
            AutoOrderMiscRepository_1.AutoOrderMiscRepository,
        ],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([
                login_site_entity_1.LoginSite,
                take_order_special_1.TakeOrderSpecial,
                order_cmt_1.OrderCmt,
                auto_order_1.AutoOrder,
                auto_order_misc_1.AutoOrderMisc,
            ]),
            typeorm_1.TypeOrmModule.forRoot({
                autoLoadEntities: true,
                type: 'mysql',
                host: process.env.DB_HOSTNAME,
                port: 3306,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: 'study',
                entities: [login_site_entity_1.LoginSite, auto_order_1.AutoOrder, auto_order_misc_1.AutoOrderMisc],
                synchronize: false,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                autoLoadEntities: true,
                name: 'takeorderspecial',
                type: 'mysql',
                host: process.env.DB_HOSTNAME,
                port: 3306,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: 'study2',
                entities: [take_order_special_1.TakeOrderSpecial],
                synchronize: false,
            }),
        ],
    })
], CommonModule);
//# sourceMappingURL=common.module.js.map