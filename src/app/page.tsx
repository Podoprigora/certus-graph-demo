import { Metadata } from "next";
import nextDynamic from "next/dynamic";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { TopicsService } from "~/services";

const TopTopicsChart = nextDynamic(
  () => import("~/components/top-topics-chart").then((module) => module.TopTopicsChart),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Certus Graph Demo",
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const result = await TopicsService.getTopItemsByLabel(5);

  return (
    <Paper sx={{ p: 5, width: "100%" }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1">Top Topics</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          How Many Clients Are Discussing Topics
        </Typography>
      </Box>
      <Box>
        <TopTopicsChart items={result.labelArr} />
      </Box>
    </Paper>
  );
}
