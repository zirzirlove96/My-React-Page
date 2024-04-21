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
exports.TakeOrderSpecialRepository = void 0;
const common_1 = require("@nestjs/common");
const take_order_special_1 = require("../entities/take_order_special");
const typeorm_1 = require("typeorm");
let TakeOrderSpecialRepository = class TakeOrderSpecialRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(take_order_special_1.TakeOrderSpecial, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async saveTakeOrderSpecial(body) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        let result2;
        try {
            const order = new take_order_special_1.TakeOrderSpecial();
            order.ampCode = body.ampCode;
            order.siteCode = body.siteCode;
            order.specialCode = body.specialCode;
            const result = await this.find({
                select: {
                    specialCode: true,
                },
                where: {
                    ampCode: body.ampCode,
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
exports.TakeOrderSpecialRepository = TakeOrderSpecialRepository;
exports.TakeOrderSpecialRepository = TakeOrderSpecialRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], TakeOrderSpecialRepository);
//# sourceMappingURL=TakeOrderSpecialRepository.js.map