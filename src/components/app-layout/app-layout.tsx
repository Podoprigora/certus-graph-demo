"use client";

import { styled } from "@mui/material/styles";
import Container, { ContainerProps } from "@mui/material/Container";

// Interfaces
export interface AppLayoutProps {
  children: React.ReactNode;
}

//Styles
const ContainerStyles = styled((props: ContainerProps) => <Container component="main" maxWidth={false} {...props} />)(
  () => {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: 800,
      height: "100%",
    };
  }
);

export const AppLayout = (props: AppLayoutProps) => {
  return <ContainerStyles {...props} />;
};
