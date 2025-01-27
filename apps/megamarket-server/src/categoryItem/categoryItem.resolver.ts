import * as graphql from "@nestjs/graphql";
import { CategoryItemResolverBase } from "./base/categoryItem.resolver.base";
import { CategoryItem } from "./base/CategoryItem";
import { CategoryItemService } from "./categoryItem.service";

@graphql.Resolver(() => CategoryItem)
export class CategoryItemResolver extends CategoryItemResolverBase {
  constructor(protected readonly service: CategoryItemService) {
    super(service);
  }
}
