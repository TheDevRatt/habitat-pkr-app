import FontAwesome from "@expo/vector-icons/FontAwesome";

import {
  useFonts,
  Karla_200ExtraLight,
  Karla_300Light,
  Karla_400Regular,
  Karla_500Medium,
  Karla_600SemiBold,
  Karla_700Bold,
  Karla_800ExtraBold,
  Karla_200ExtraLight_Italic,
  Karla_300Light_Italic,
  Karla_400Regular_Italic,
  Karla_500Medium_Italic,
  Karla_600SemiBold_Italic,
  Karla_700Bold_Italic,
  Karla_800ExtraBold_Italic,
} from "@expo-google-fonts/karla";

import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useEffect } from "react";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // font mapping
  const [loaded, error] = useFonts({
    Karla_200ExtraLight,
    Karla_300Light,
    Karla_400Regular,
    Karla_500Medium,
    Karla_600SemiBold,
    Karla_700Bold,
    Karla_800ExtraBold,
    Karla_200ExtraLight_Italic,
    Karla_300Light_Italic,
    Karla_400Regular_Italic,
    Karla_500Medium_Italic,
    Karla_600SemiBold_Italic,
    Karla_700Bold_Italic,
    Karla_800ExtraBold_Italic,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
   <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding/signUp" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding/logIn" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding/basicInfo" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding/membership" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding/paymentInfo" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding/TermsAndConditions" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
  );
}



