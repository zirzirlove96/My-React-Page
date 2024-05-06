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
exports.OrderCmt = void 0;
const typeorm_1 = require("typeorm");
let OrderCmt = class OrderCmt {
};
exports.OrderCmt = OrderCmt;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], OrderCmt.prototype, "wdate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderCmt.prototype, "siteCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderCmt.prototype, "logProcess", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderCmt.prototype, "number", void 0);
exports.OrderCmt = OrderCmt = __decorate([
    (0, typeorm_1.Entity)({ database: 'study', name: 'login_site' })
], OrderCmt);
//# sourceMappingURL=order_cmt.js.map