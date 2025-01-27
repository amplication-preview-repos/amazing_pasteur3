import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { Decimal } from "decimal.js";

export type CategoryItemUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  max?: Decimal | null;
  min?: Decimal | null;
  name?: string | null;
  typeField?: string | null;
};
