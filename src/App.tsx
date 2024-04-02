import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useColorScheme } from "nativewind";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center bg-sky-100 dark:bg-sky-900">
      <Text onPress={toggleColorScheme} className="text-xl dark:text-sky-100">
        {`PRESS ME IS ${colorScheme}`}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
