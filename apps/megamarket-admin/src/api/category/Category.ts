import { CategoryItem } from "../categoryItem/CategoryItem";

export type Category = {
  cat_Id?: Category | null;
  categoryItems?: Array<CategoryItem>;
  createdAt: Date;
  id: string;
  name: string;
  parentId?: Category | null;
  updatedAt: Date;
};
