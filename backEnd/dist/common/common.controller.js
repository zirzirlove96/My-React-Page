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
exports.CommonController = void 0;
const common_1 = require("@nestjs/common");
const common_service_1 = require("./common.service");
const take_order_special_1 = require("../entities/take_order_special");
const InserOrderLog_1 = require("../dto/InserOrderLog");
let CommonController = class CommonController {
    constructor(commonService) {
        this.commonService = commonService;
    }
    async getAccount(ampCode) {
        return await this.commonService.getAccount(ampCode);
    }
    async getOrderInfo(siteCode) {
        console.log(siteCode);
        return await this.commonService.getOrderInfo(siteCode);
    }
    async insertOrderSpecial(body) {
        return await this.commonService.insertOrderSpecial(body);
    }
    async insertLogOrderSpecial(body) {
        return await this.commonService.insertLogOrderSpecial(body);
    }
    async getPreOrderSpecialList() {
        return await this.commonService.getPreOrderSpecialList();
    }
};
exports.CommonController = CommonController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('ampCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommonController.prototype, "getAccount", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('siteCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommonController.prototype, "getOrderInfo", null);
__decorate([
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [take_order_special_1.TakeOrderSpecial]),
    __metadata("design:returntype", Promise)
], CommonController.prototype, "insertOrderSpecial", null);
__decorate([
    (0, common_1.Post)('saveLog'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InserOrderLog_1.InsertOrderLog]),
    __metadata("design:returntype", Promise)
], CommonController.prototype, "insertLogOrderSpecial", null);
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommonController.prototype, "getPreOrderSpecialList", null);
exports.CommonController = CommonController = __decorate([
    (0, common_1.Controller)('common'),
    __metadata("design:paramtypes", [common_service_1.CommonService])
], CommonController);
//# sourceMappingURL=common.controller.js.map