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
exports.LoginSite = void 0;
const typeorm_1 = require("typeorm");
const auto_order_1 = require("./auto_order");
let LoginSite = class LoginSite {
};
exports.LoginSite = LoginSite;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LoginSite.prototype, "ampCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LoginSite.prototype, "siteCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LoginSite.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LoginSite.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => auto_order_1.AutoOrder, (auto_order) => auto_order.login_site),
    (0, typeorm_1.JoinColumn)({ name: 'siteCode' }),
    __metadata("design:type", Array)
], LoginSite.prototype, "auto_order", void 0);
exports.LoginSite = LoginSite = __decorate([
    (0, typeorm_1.Entity)({ database: 'study', name: 'login_site' })
], LoginSite);
//# sourceMappingURL=login_site.entity.js.map