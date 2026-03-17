import { View, Text } from 'react-native'
import React from 'react'
import { useAppContext } from '@/context/AppProvider';
import { useChatContext } from 'stream-chat-expo';
import { useNavigation, useRouter } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';
import { FullScreenLoader } from '@/components/FullScreenLoader';

const ChannelScreen = () => {
    const {channel,setThread} = useAppContext();
    const {client} = useChatContext();
    const router = useRouter();
    const navigation = useNavigation();

    const headerHeight = useHeaderHeight();
    let displayName = "";
    let avatrUrl = "";
    if(channel){
        const members = Object.values(channel.state.members);
        const otherMember = members.find((member)=> member.user_id! === client.userID);
        displayName = otherMember?.user?.name || "Unknown User";
        avatrUrl = otherMember?.user?.image || "";

    }
    if(!channel) return <FullScreenLoader message='Loading Study Room'  />

  return (
    <View>
      <Text>ChannelScreen</Text>
    </View>
  )
}

export default ChannelScreen