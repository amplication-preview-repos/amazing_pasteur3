import { Category } from "../category/Category";
import { Decimal } from "decimal.js";

export type CategoryItem = {
  category?: Category | null;
  createdAt: Date;
  id: string;
  max: Decimal | null;
  min: Decimal | null;
  name: string | null;
  typeField: string | null;
  updatedAt: Date;
};
