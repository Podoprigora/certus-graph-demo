import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { ThemeProvider } from "~/components/theme";
import { AppLayout } from "~/components/app-layout";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider>
            <AppLayout>{children}</AppLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
