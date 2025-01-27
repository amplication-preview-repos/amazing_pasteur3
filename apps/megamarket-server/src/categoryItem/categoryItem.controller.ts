import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CategoryItemService } from "./categoryItem.service";
import { CategoryItemControllerBase } from "./base/categoryItem.controller.base";

@swagger.ApiTags("categoryItems")
@common.Controller("categoryItems")
export class CategoryItemController extends CategoryItemControllerBase {
  constructor(protected readonly service: CategoryItemService) {
    super(service);
  }
}
