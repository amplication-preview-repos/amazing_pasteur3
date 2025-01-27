import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { CategoryItemListRelationFilter } from "../categoryItem/CategoryItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  cat_Id?: CategoryWhereUniqueInput;
  categoryItems?: CategoryItemListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  parentId?: CategoryWhereUniqueInput;
};
