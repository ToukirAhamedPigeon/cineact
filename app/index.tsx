import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex flex-col w-screen h-screen items-center justify-center bg-white">
      <Text className="text-5xl  text-dark-200">Welcome !!</Text>
      <Link href="/onboarding" className="mt-10 p-4 bg-blue-500 rounded">
        <Text className="text-white text-lg">Go to Onboarding</Text>
      </Link>
      <Link href={{ pathname: "/movie/[id]", params: { id: "avengers" } }} className="mt-4 p-4 bg-green-500 rounded">
        <Text className="text-white text-lg">Go to Movie Avengers</Text>
      </Link>
    </View>
  );
}
