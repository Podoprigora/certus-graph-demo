import { Metadata } from "next";

import { TopicsService } from "~/services";
import { TopTopics } from "./_components/top-topics";
import { TopTopicsSkeleton } from "./_components/top-topics-skeleton";

export const metadata: Metadata = {
  title: "Certus Graph Demo",
};

export const dynamic = "force-dynamic";

const LABELS = [5, 10, 15];

export default async function Sample() {
  const items = await TopicsService.getTopItemsByLabel(LABELS[0]);

  return <TopTopics initialItems={items} />;
}
