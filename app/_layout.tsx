import { Stack } from "expo-router";
import { observer } from "mobx-react-lite";
import { ThemeProvider } from "@/theme/hooks";

const RootLayout = observer(() => {
  return (
    <ThemeProvider defaultTheme="system">
      <Stack />
    </ThemeProvider>
  );
});

export default RootLayout;
