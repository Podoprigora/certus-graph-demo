"use client";

import Typography from "@mui/material/Typography";

interface GlobalErrorPageProps {
  error: Error;
}

export default function GlobalErrorPage(props: GlobalErrorPageProps) {
  const { error } = props;

  return (
    <Typography variant="inherit" color="error">
      {error?.message || "Something went wrong"}
    </Typography>
  );
}
