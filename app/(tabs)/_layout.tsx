import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import React from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const TabIcon= ({focused,icon,title}:{focused:boolean,icon:any,title:string})=>{
  if(focused){
    return (
            <ImageBackground source={images.highlight} className="flex flex-row w-full flex-1 min-w-[96px] min-h-[50px] mt-[18px] items-center justify-center rounded-full overflow-hidden">
              <Image source={icon} tintColor="#151312" className="size-5" />
              <Text className="text-secondary text-base font-semibold ml-2" >{title}</Text>
            </ImageBackground>
            )
  }
  return (
            <View className="size-full justify-center items-center mt-4 rounded-full">
              <Image source={icon} tintColor="#A8B5DB" className="size-5" />
            </View>
            )
}

const _Layout = () => {
  return (
    <Tabs screenOptions={{ 
      tabBarShowLabel:false,
      tabBarItemStyle:{
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      tabBarStyle:{
        backgroundColor: '#0f0D23',
        borderRadius: 50,
        marginHorizontal: 20,
        marginBottom: 36,
        marginTop: 8,
        marginLeft: 8,
        height: 50,
        width:'96.5%',
        position: 'absolute',
        //overflow:'hidden',
        borderWidth: 0,
        borderColor: '#0f0D23'
      },
      headerShown: false
       }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }: { focused: boolean }) => (
             <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
      <Tabs.Screen name="movies/[id]" options={{ href: null }} />
    </Tabs>
  );
};

export default _Layout;

const styles = StyleSheet.create({});
