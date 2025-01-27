import { Ad as TAd } from "../api/ad/Ad";

export const AD_TITLE_FIELD = "Name";

export const AdTitle = (record: TAd): string => {
  return record.Name?.toString() || String(record.id);
};
