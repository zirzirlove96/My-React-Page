import { CommonService } from "./common.service";
import { Module } from "@nestjs/common";
import { CommonController } from "./common.controller";

@Module({
  controllers: [CommonController],
  providers: [CommonService],
  imports: [
    type: "data",
  	host: "database host",
  	port: 3306,
  	username: "database username",
 	 password: "database password",
  	database: "database name",
  	entities: "",
  	sychronize: false
  ]
})

export class CommonModule {}
