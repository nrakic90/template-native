import { Stack } from "expo-router";
import { ThemeProvider } from "../theme/hooks";

export default function RootLayout() {
  return (
    <ThemeProvider defaultTheme="system">
      <Stack />
    </ThemeProvider>
  );
}
