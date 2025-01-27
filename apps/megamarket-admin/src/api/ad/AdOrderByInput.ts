import { SortOrder } from "../../util/SortOrder";

export type AdOrderByInput = {
  Name?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
