import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type AdWhereInput = {
  Name?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatFilter;
};
