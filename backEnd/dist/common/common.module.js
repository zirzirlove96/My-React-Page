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
const path_1 = require("path");
const LoginSiteRepository_1 = require("../respository/LoginSiteRepository");
let CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Module)({
        controllers: [common_controller_1.CommonController],
        providers: [common_service_1.CommonService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([LoginSiteRepository_1.LoginSiteRespository]),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '0000',
                database: 'study',
                entities: [(0, path_1.join)(__dirname, '/**/*.entity.ts')],
                synchronize: false,
            }),
        ],
    })
], CommonModule);
//# sourceMappingURL=common.module.js.map