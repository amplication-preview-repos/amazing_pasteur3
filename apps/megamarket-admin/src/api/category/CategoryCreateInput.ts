import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { CategoryItemCreateNestedManyWithoutCategoriesInput } from "./CategoryItemCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  cat_Id?: CategoryWhereUniqueInput | null;
  categoryItems?: CategoryItemCreateNestedManyWithoutCategoriesInput;
  name: string;
  parentId?: CategoryWhereUniqueInput | null;
};
