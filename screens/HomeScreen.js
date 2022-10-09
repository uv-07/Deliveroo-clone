import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRows from "../components/FeaturedRows";
import { sanityClient } from "../sanity";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories,setFeaturedCategories] = useState([])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient.fetch
  },[])

  return (
    <SafeAreaView className="bg-white pt-5 flex-col ">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-2 px-2 space-x-2   py-2">
        <Image
          source={{
            url: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now !</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00cc88" />
          </Text>
        </View>

        <UserIcon size={35} color="#00cc88" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restros and Cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color="#00cc88" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeaturedRows 
          id="123"
          title="Featured"
          description="paid placements from our partners"
          /> 
        {/* Tasty Discounts*/}
        <FeaturedRows 
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoyin' these juicy discounts!"
  
        /> 
      {/* Offers Near you */}
        <FeaturedRows 
          id="12345"
          title="Offers near you!"
          description="Why not support your local restaurent tonight !"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
