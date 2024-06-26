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
exports.AutoOrder = void 0;
const typeorm_1 = require("typeorm");
const login_site_entity_1 = require("./login_site.entity");
let AutoOrder = class AutoOrder {
};
exports.AutoOrder = AutoOrder;
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AutoOrder.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AutoOrder.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AutoOrder.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AutoOrder.prototype, "data_normal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AutoOrder.prototype, "overlap_mode", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => login_site_entity_1.LoginSite, (login_site) => login_site.auto_order),
    __metadata("design:type", login_site_entity_1.LoginSite)
], AutoOrder.prototype, "login_site", void 0);
exports.AutoOrder = AutoOrder = __decorate([
    (0, typeorm_1.Entity)({ database: 'study', name: 'auto_order' })
], AutoOrder);
//# sourceMappingURL=auto_order.js.map