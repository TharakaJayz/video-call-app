import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth, useUser } from "@clerk/expo";
import { Image } from "expo-image";
import {Ionicons} from "@expo/vector-icons"
const ProfileScreen = () => {
  const { signOut } = useAuth();
  const { user } = useUser();
  return (
    <SafeAreaView className="flex-1 bg-background ">
      <View className="px-5 py-3">
        <Text className="text-2xl font-bold text-foreground">Profile</Text>
      </View>
      {/* Profile Card  */}
      <View className="items-center py-5">
        <View className="mb-3.5 relative">
          <Image
            source={user?.imageUrl}
            style={{ width: 88, height: 88, borderRadius: 44 }}
            contentFit="contain"
          />
          <View className="absolute bottom-[2px] right-[2px] h-[18px] w-[18px] rounded-[9px] bg-accent-secondary border-[3px] border-background" />
        </View>
        <Text className="text-2xl font-bold text-foreground ">
          {user?.fullName || user?.username || "Student"}
        </Text>
        <Text className="mt-0.5 text-base text-foreground-muted">
          {user?.primaryEmailAddress?.emailAddress}
        </Text>
         <View className="mt-3 flex-row items-center gap-1.5 rounded-full bg-[#FDCB6E1E] px-3.5 py-1.5">
          <Ionicons name="flame" size={16} color="#FDCB6E" />
          <Text className="text-sm font-semibold text-[#FDCB6E]">7 day study streak</Text>
        </View>
      </View>
      
    </SafeAreaView>
  );
};

export default ProfileScreen;
