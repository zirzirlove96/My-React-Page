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
exports.AutoOrderMiscRepository = void 0;
const common_1 = require("@nestjs/common");
const auto_order_misc_1 = require("../entities/auto_order_misc");
const typeorm_1 = require("typeorm");
let AutoOrderMiscRepository = class AutoOrderMiscRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(auto_order_misc_1.AutoOrderMisc, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
};
exports.AutoOrderMiscRepository = AutoOrderMiscRepository;
exports.AutoOrderMiscRepository = AutoOrderMiscRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], AutoOrderMiscRepository);
//# sourceMappingURL=AutoOrderMiscRepository.js.map