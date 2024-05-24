import { SafeAreaView, StatusBar, View } from "react-native";
import Login from "../components/login";

export default function Index() {
  return (
    <SafeAreaView className='flex-1 justify-center bg-sky-100 dark:bg-sky-900'>
      <StatusBar backgroundColor='transparent' translucent={true} />
      <Login />
    </SafeAreaView>
  );
}
