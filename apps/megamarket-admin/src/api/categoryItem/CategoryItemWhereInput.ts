import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryItemWhereInput = {
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  max?: DecimalNullableFilter;
  min?: DecimalNullableFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
