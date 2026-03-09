import { Stack } from "expo-router";
import "../../global.css";

import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from '@clerk/expo/token-cache'


export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}  publishableKey= {process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        {/* <Stack.Screen name="index" options={{ title: "Home" }} /> */}
      </Stack>
    </ClerkProvider>
  );
}
