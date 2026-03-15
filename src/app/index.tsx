import { Text, View, StyleSheet, Pressable } from "react-native";
import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

export default function Index() {
  const {isSignedIn,isLoaded ,signOut} = useAuth()
  if(!isLoaded) return null;
  if(!isSignedIn){
    return <Redirect href= {"/(auth)"} />
  }
  return (
    <View style={styles.container}>
      <Text className="text-primary">Edit src/app/index.tsx to edit this screen 123.</Text>
      <Pressable onPress={()=> signOut()}>
        <Text>Sign out</Text>
      </Pressable>

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
