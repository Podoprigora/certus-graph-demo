"use client";

import { useCallback, useState } from "react";

import nextDynamic from "next/dynamic";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

import { ITopic, TopicsService } from "~/services";
import { SelectField } from "~/components/select-field";

const TopTopicsChart = nextDynamic(
  () => import("~/components/top-topics-chart").then((module) => module.TopTopicsChart),
  {
    ssr: false,
  }
);

// Interfaces
export interface TopTopicsProps {
  initialItems?: ITopic[];
}

// Styles
export const RootStyles = styled(Paper)(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "column nowrap",
    padding: theme.spacing(5),
    width: "100%",
    height: 560,
  };
});

const HeaderStyles = styled("header")(({ theme }) => {
  return {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gridTemplateRows: "min-content min-content",
    alignItems: "start",
    columnGap: theme.spacing(1),
    marginBottom: theme.spacing(5),

    "& .MuiTypography-root": {
      gridColumn: "1 / 2",
    },

    "& .ActionContainer-root": {
      gridColumn: "2 / 3",
      gridRow: "1 / -1",
      alignSelf: "center",
    },
  };
});

const ContentStyles = styled("div")(({ theme }) => {
  return {
    flex: 1,
  };
});

const ActionContainerStyles = styled("div", {
  target: "ActionContainer-root",
})(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "row nowrap",
    gap: theme.spacing(1.5),
    alignItems: "center",

    "& .MuiTextField-root": {
      minWidth: 84,
    },
  };
});

// Helpers
const TIMEFRAME_OPTIONS = [
  { id: 5, title: "5" },
  { id: 10, title: "10" },
  { id: 15, title: "15" },
];

// Component
export const TopTopics = (props: TopTopicsProps) => {
  const { initialItems } = props;
  const [items, setItems] = useState(initialItems || []);
  const [loading, setLoading] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState<number | string | undefined>(TIMEFRAME_OPTIONS.at(0)?.id);

  const fetchItems = useCallback(async (timeframe: string) => {
    try {
      setLoading(true);

      const response = await TopicsService.getTopItemsByLabel(timeframe);

      setItems(response || []);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleTimeframeChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = ev.target?.value;

      if (newValue) {
        setSelectedTimeframe(newValue);
        fetchItems(newValue);
      }
    },
    [fetchItems]
  );

  return (
    <RootStyles>
      <HeaderStyles>
        <Typography variant="subtitle1">Top Topics</Typography>
        <Typography variant="subtitle2" color="text.secondary" noWrap>
          How Many Clients Are Discussing Topics
        </Typography>
        <ActionContainerStyles>
          <SelectField
            value={selectedTimeframe}
            options={TIMEFRAME_OPTIONS}
            color="secondary"
            fullWidth
            onChange={handleTimeframeChange}
          />
          <IconButton edge="end" size="small">
            <MoreVertRoundedIcon />
          </IconButton>
        </ActionContainerStyles>
      </HeaderStyles>
      <ContentStyles>
        <TopTopicsChart items={items} loading={loading} />
      </ContentStyles>
    </RootStyles>
  );
};
