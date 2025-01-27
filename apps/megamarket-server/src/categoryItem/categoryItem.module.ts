import { Module } from "@nestjs/common";
import { CategoryItemModuleBase } from "./base/categoryItem.module.base";
import { CategoryItemService } from "./categoryItem.service";
import { CategoryItemController } from "./categoryItem.controller";
import { CategoryItemResolver } from "./categoryItem.resolver";

@Module({
  imports: [CategoryItemModuleBase],
  controllers: [CategoryItemController],
  providers: [CategoryItemService, CategoryItemResolver],
  exports: [CategoryItemService],
})
export class CategoryItemModule {}
