import { z } from "zod";

import { getApiPath } from "./utils";

export interface ITopic {
  label?: string;
  count?: number;
}

export interface ITopTopic {
  labelArr?: ITopic[];
}

const topTopicSchema: z.ZodType<ITopTopic> = z.object({
  labelArr: z.array(
    z.object({
      label: z.string().default(""),
      count: z.number().default(0),
    })
  ),
});

const getTopItemsByLabel = async (label: number | string) => {
  const response = await fetch(getApiPath(`label/${label}`));
  const json = await response.json();
  const result = await topTopicSchema.spa(json);

  if (result.success) {
    return result.data.labelArr;
  }

  return [];
};

export const TopicsService = {
  getTopItemsByLabel,
} as const;
