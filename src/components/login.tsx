import React, { useState, useCallback } from "react";
import { useColorScheme } from "nativewind";
import { Text, View, Switch, TextInput, Button } from "react-native";
import { Link } from "expo-router";
import {
  AppleSocialButton,
  FacebookSocialButton,
  GoogleSocialButton,
} from "react-native-social-buttons";

const Login = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const toggleSwitch = () => {
    toggleColorScheme();
    setIsEnabled((prev) => !prev);
  };

  return (
    <View className='bg-sky-100 flex-1 dark:bg-sky-900 pt-5'>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor='#3e3e3e'
        onValueChange={toggleSwitch}
        value={isEnabled}
        className='z-10'
      />
      <View className='bg-sky-950 dark:bg-sky-300 w-14 h-14 rounded-full absolute' />
      <View className='bg-sky-900 opacity-25 dark:bg-sky-400 w-56 h-56 rounded-full absolute -top-20 -left-2' />
      <View className='bg-sky-400 opacity-25 dark:bg-sky-100 w-96 h-96 rounded-full absolute -top-32 -right-10' />
      <View className='flex-row justify-center items-center h-44'>
        <Text className='text-sky-700 text-6xl dark:text-sky-300'>Argen</Text>
        <Text className='text-sky-950 text-6xl underline dark:text-sky-50'>
          tina
        </Text>
      </View>
      <View className='items-center gap-4 pt-0'>
        <TextInput
          selectTextOnFocus
          inputMode='email'
          placeholder='Ingresar email'
          className='border border-sky-900 dark:border-sky-300 w-3/4 rounded-lg h-14 pl-4'
          placeholderTextColor={colorScheme === "dark" ? "white" : "#787878"}
        />
        <TextInput
          placeholder='Ingresar contraseña'
          className='border  border-sky-900 dark:border-sky-300 w-3/4 rounded-lg h-14 pl-4'
          placeholderTextColor={colorScheme === "dark" ? "white" : "#787878"}
        />
        <View className='w-3/4 items-end'>
          <Text className='text-sky-950 underline font-semibold dark:text-sky-50'>
            Olvidaste la contraseña?
          </Text>
        </View>
        <View className='w-3/4 pt-6'>
          <Link push href='/home' asChild>
            <Button
              title='Login'
              color={colorScheme === "dark" ? "#38bdf8" : "#082f49"}
              accessibilityLabel='login button'
            />
          </Link>
        </View>
        <View className='flex-row justify-between content-center w-3/4 pt-4'>
          <View className='border-b-sky-950 dark:border-b-sky-200 w-24 h-0 border-b-2 pt-2'></View>
          <Text className='text-sky-950 dark:text-sky-100'>
            O create una cuenta
          </Text>
          <View className='border-b-sky-950 dark:border-b-sky-200 w-24 h-0 border-b-2 pt-2'></View>
        </View>
        <View className='w-3/4 items-center h-1/3 justify-evenly'>
          <FacebookSocialButton
            onPress={() => {}}
            buttonViewStyle={{ width: "100%" }}
          />
          <GoogleSocialButton
            onPress={() => {}}
            buttonViewStyle={{ width: "100%" }}
          />
          <AppleSocialButton
            onPress={() => {}}
            buttonViewStyle={{ width: "100%" }}
          />
        </View>
        <Text className='text-sky-900 dark:text-sky-50'>
          No estas registrado todavia?
        </Text>
        <Text className='font-bold text-sky-950 underline  dark:text-sky-50'>
          Create una cuenta
        </Text>
      </View>
    </View>
  );
};

export default Login;
