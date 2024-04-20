"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const login_site_entity_1 = require("../entities/login_site.entity");
const axios_1 = require("axios");
let CommonService = class CommonService {
    constructor(loginsiteRepository) {
        this.loginsiteRepository = loginsiteRepository;
    }
    async getAccount({ ampCode }) {
        const result = await this.loginsiteRepository.find({
            select: {
                siteCode: true,
            },
            where: {
                ampCode: ampCode,
            },
        });
        return result;
    }
    async getOrderInfo({ siteCode }) {
        let orderinfo;
        try {
            orderinfo = await axios_1.default.post('http://localhost:4000/common', {
                site_code: siteCode,
            });
            console.log(orderinfo);
        }
        catch (e) {
            console.error(e);
        }
        return orderinfo;
    }
};
exports.CommonService = CommonService;
exports.CommonService = CommonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(login_site_entity_1.LoginSite)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CommonService);
//# sourceMappingURL=common.service.js.map