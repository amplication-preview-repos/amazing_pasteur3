import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { CategoryItemUpdateManyWithoutCategoriesInput } from "./CategoryItemUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  cat_Id?: CategoryWhereUniqueInput | null;
  categoryItems?: CategoryItemUpdateManyWithoutCategoriesInput;
  name?: string;
  parentId?: CategoryWhereUniqueInput | null;
};
