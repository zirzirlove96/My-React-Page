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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonService = void 0;
const TakeOrderSpecialRepository_1 = require("./../respository/TakeOrderSpecialRepository");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const LoginSiteRepository_1 = require("../respository/LoginSiteRepository");
const axios_1 = require("axios");
let CommonService = class CommonService {
    constructor(loginsiteRepository, takeOrderSpecialRepository, dataSource) {
        this.loginsiteRepository = loginsiteRepository;
        this.takeOrderSpecialRepository = takeOrderSpecialRepository;
        this.dataSource = dataSource;
    }
    async getAccount(ampCode) {
        console.log('123123123');
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
    async insertOrderSpecial(body) {
        let result;
        try {
            return await this.takeOrderSpecialRepository.saveTakeOrderSpecial(body);
        }
        catch (e) {
            console.error(e);
        }
        return result;
    }
    async getPreOrderSpecialList({ ampCode, siteCode }) {
        let orderlist;
        try {
            orderlist = await this.takeOrderSpecialRepository.find({
                select: {
                    specialCode: true,
                },
                where: {
                    siteCode: siteCode,
                    ampCode: ampCode,
                },
            });
            return orderlist;
        }
        catch (e) {
            console.error(e);
        }
        return '123';
    }
};
exports.CommonService = CommonService;
exports.CommonService = CommonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [LoginSiteRepository_1.LoginSiteRespository,
        TakeOrderSpecialRepository_1.TakeOrderSpecialRepository,
        typeorm_1.DataSource])
], CommonService);
//# sourceMappingURL=common.service.js.map