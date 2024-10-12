import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signin" />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}