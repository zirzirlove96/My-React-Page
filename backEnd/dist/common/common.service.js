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
const take_order_special_1 = require("../entities/take_order_special");
const OrderCmtRepository_1 = require("../respository/OrderCmtRepository");
const AutoOrderRepository_1 = require("../respository/AutoOrderRepository");
let CommonService = class CommonService {
    constructor(loginsiteRepository, takeOrderSpecialRepository, orderCmtRepository, autoOrderRepository, dataSource) {
        this.loginsiteRepository = loginsiteRepository;
        this.takeOrderSpecialRepository = takeOrderSpecialRepository;
        this.orderCmtRepository = orderCmtRepository;
        this.autoOrderRepository = autoOrderRepository;
        this.dataSource = dataSource;
    }
    async getAccount(ampCode) {
        let result;
        try {
            result = await this.autoOrderRepository
                .createQueryBuilder('auto_order')
                .select(['auto_order.code', 'auto_order.name'])
                .innerJoin('auto_order', 'login_site')
                .andWhere('ampCode = :ampCode', { ampCode: 'amp_engine' })
                .getMany();
            console.log(result);
            return result;
        }
        catch (e) {
            console.error(e);
        }
        return result;
    }
    async getOrderInfo(siteCode) {
        let orderinfo;
        try {
            orderinfo = await this.autoOrderRepository.find();
        }
        catch (e) {
            console.error(e);
        }
        return orderinfo;
    }
    async insertOrderSpecial(body) {
        let result;
        try {
            return await this.saveTakeOrderSpecial(body);
        }
        catch (e) {
            console.error(e);
        }
        return result;
    }
    async insertLogOrderSpecial(body) {
        let result;
        try {
            return await this.orderCmtRepository.save(body);
        }
        catch (e) {
            console.error(e);
        }
    }
    async getPreOrderSpecialList() {
        let orderlist;
        try {
            orderlist = await this.takeOrderSpecialRepository.find();
        }
        catch (e) {
            console.error(e);
        }
        return orderlist;
    }
    async saveTakeOrderSpecial(body) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        let result2;
        try {
            const order = new take_order_special_1.TakeOrderSpecial();
            order.number = body.number;
            order.siteCode = body.siteCode;
            order.specialCode = body.specialCode;
            const result = await this.takeOrderSpecialRepository.find({
                select: {
                    specialCode: true,
                },
                where: {
                    siteCode: body.siteCode,
                },
            });
            if (result.length > 0) {
                order.specialCode = result[0].specialCode + '\n' + order.specialCode;
            }
            result2 = await queryRunner.manager.upsert(take_order_special_1.TakeOrderSpecial, order, []);
            console.log('특별처리 끝');
            console.log(result2);
            await queryRunner.commitTransaction();
        }
        catch (e) {
            await queryRunner.rollbackTransaction();
            console.error(e);
        }
        finally {
            await queryRunner.release();
        }
        return 'success';
    }
};
exports.CommonService = CommonService;
exports.CommonService = CommonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [LoginSiteRepository_1.LoginSiteRespository,
        TakeOrderSpecialRepository_1.TakeOrderSpecialRepository,
        OrderCmtRepository_1.OrderCmtRepositiory,
        AutoOrderRepository_1.AutoOrderRepository,
        typeorm_1.DataSource])
], CommonService);
//# sourceMappingURL=common.service.js.map