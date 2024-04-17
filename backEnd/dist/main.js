"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_module_1 = require("./common/common.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(common_module_1.CommonModule);
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map