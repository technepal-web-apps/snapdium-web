import { Image, Pressable, Text, TextInput, useWindowDimensions, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { userLoginStore } from "./login.store";
import { GoogleAuthProvider, GoogleLoginResult } from "./providers/google.login";
import { AppPrimaryButton } from "../designsystem/buttons";
import { StateSetter } from "domain/typealias/typealias";

export default function LoginScreen() {
    return (
        <View className="" style={{ flex: 1, flexDirection: 'column' }}>
            <View className="flex flex-row h-full">
                <LeftContainer />
                <RightContainer />
            </View>
        </View>
    )
}

function LeftContainer() {
    const router = useRouter()
    const { isLoggedIn, handleLogin, clearState } = userLoginStore()
    const [username, setUsername] = useState('swornim.shah')
    const [password, setPassword] = useState('password')
    const [loading, setLoading] = useState(false)

    const nextScreen = () => { router.push('/feed') }

    useEffect(() => {
        setLoading(false)
        if (!isLoggedIn) return

        if (isLoggedIn) {
            nextScreen()
        }

        return () => { clearState() }
    }, [isLoggedIn])

    const handleLoginPress = async () => {
        setLoading(true)
        await handleLogin({ userName: username, password: password })
    }

    const onGoogleAuthResult = (response: GoogleLoginResult) => {
        console.log(`onGoogleAuthResult ${response}`)
        if (response.status !== true) { return }
        nextScreen()
    }

    return (
        <View className="flex-1 items-center bg-white pt-12 px-2">
            <View className="flex flex-col items-center gap-6">
                <Ionicons name="gift-outline" size={50} color="#1DA1F2" />
                <View className="items-center">
                    <Text className="text-3xl font-medium">Login to Continue</Text>
                    <Text className="text-sm font-roboto text-gray-400">Make account easily and go to the details of the name</Text>
                </View>
                <GoogleAuthProvider onResult={onGoogleAuthResult} />
                <View className="mb-22">
                    <Text>Or</Text>
                </View>
                <InputContainer userName={setUsername} password={setPassword} />
                <AppPrimaryButton title="Log In" onPress={handleLoginPress} />
            </View>
            <View className="mb-12" />
            <DontHaveAccountView />
        </View>
    )
}

function DontHaveAccountView() {
    const router = useRouter()
    const onRegisterClick = () => { router.push('/register') }
    return (
        <View>
            <Text className="text-md">
                Don't have an account?
                <Pressable onPress={onRegisterClick}>
                    <Text className="text-sm color-blue-400 font-semibold"> Register</Text>
                </Pressable>
            </Text>
        </View>
    )
}

function RightContainer() {
    const { width } = useWindowDimensions()
    const iconSize = width < 400 ? 60 : width < 768 ? 80 : 200

    return (
        <View style={{ backgroundColor: '', paddingTop: 32 }} className="hidden md:flex flex-1 px-2 justify-start items-center bg-green-50 ">
            {/* <Ionicons size={iconSize} name="qr-code-outline" color="white" /> */}
            <Image style={{}} className="md:p-12" source={require('@assets/login/login_right_icon.svg')} />
        </View>
    )
}

const InputContainer: React.FC<{ userName: StateSetter<string>, password: StateSetter<string> }> = ({ userName, password }) => {
    return (
        <View className="gap-3">
            <TextInput
                onChangeText={(text) => {userName(text)}}
                placeholder="Enter your email address"
                className="min-w-80 p-4 border border-gray-300 rounded-lg bg-white border-1 text-gray-400"
            />
            <TextInput
                onChangeText={(text) => {password(text)}}
                placeholder="Enter your password"
                className="p-4 border border-gray-300 rounded-lg bg-white border-1 text-gray-400"
            />
        </View>
    )
}