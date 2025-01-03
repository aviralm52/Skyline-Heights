import React from "react";
import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import icons from "@/constants/icons";
import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";

const SignIn = () => {
  const { refetch, loading, isLoggedIn } = useGlobalContext();

  if (!loading && isLoggedIn) {
    return <Redirect href="/" />;
  }

  const handleLogin = async () => {
    const result = await login();

    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed To Login");
    }
  };

  return (
    <SafeAreaView className=" bg-white h-full">
      <ScrollView contentContainerClassName=" h-full">
        <Image
          source={images.onboarding}
          className=" w-full h-4/6"
          resizeMode="contain"
        />
        <View className=" px-10">
          <Text className=" text-base text-center uppercase text-black-200">
            Welcome to Skyline Heights
          </Text>
          <Text className=" text-3xl font-rubikBold text-black-300 text-center mt-2">
            Let's Get You Closer To {"\n"}
            <Text className=" text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className=" text-lg font-rubik text-black-200 text-center mt-2 ">
            Login with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className=" bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-2"
          >
            <View className=" flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className=" w-5 h-5"
                resizeMode="contain"
              />
              <Text className=" text-lg font-rubikMedium text-black-300 ml-2">
                Continue With Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

// SafeAreaView --> It fits the content in the screen without cutting the content and is irrespective of the screen
