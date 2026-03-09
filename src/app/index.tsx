import { Text, View, StyleSheet } from "react-native";
import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

export default function Index() {
  const {isSignedIn} = useAuth()
  if(!isSignedIn){
    return <Redirect href= {"/(auth)"} />
  }
  return (
    <View style={styles.container}>
      <Text className="text-red-500">Edit src/app/index.tsx to edit this screen 123.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
