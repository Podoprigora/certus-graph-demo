import { styled } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";
import { RootStyles } from "./top-topics";

//Component
export const TopTopicsSkeleton = () => {
  return (
    <RootStyles>
      <Skeleton variant="rounded" sx={{ mb: 3, height: 36, width: "65%" }} />
      <Skeleton variant="rounded" width="100%" height="100%" />
    </RootStyles>
  );
};
