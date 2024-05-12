import { Metadata } from "next";

import { TopicsService } from "~/services";
import { TopTopics } from "./_components/top-topics";

export const metadata: Metadata = {
  title: "Certus Graph Demo",
};

export const dynamic = "force-dynamic";

export default async function Sample() {
  const items = await TopicsService.getTopItemsByLabel(5);

  return <TopTopics initialItems={items} />;
}
