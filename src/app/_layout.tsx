import { Stack } from "expo-router";
import "../../global.css";

import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from '@clerk/expo/token-cache'

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://2f82c08785ba9ea96fae9d6f53bae426@o4511015209205760.ingest.us.sentry.io/4511047472316416',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Enable Logs
  enableLogs: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});


export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}  publishableKey= {process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="(auth)"/>
        <Stack.Screen name="(tabs)"/>
      </Stack>
    </ClerkProvider>
  );
}
