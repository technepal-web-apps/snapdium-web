import { Image, Pressable, Text, TextInput, useWindowDimensions, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";

export default function RegisterScreen() {
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

    const onProceedClick = () => { 
        router.push('/login')
    }
 
    return (
        <View className="flex-1 items-center bg-white pt-12 px-2">
            <View className="flex flex-col items-center gap-6">
                <Ionicons name="gift-outline" size={50} color="#1DA1F2" />
                <View className="items-center">
                    <Text className="text-3xl font-medium">Register to connect to world of blogs</Text>
                    <Text className="text-sm font-roboto text-gray-400">Make account easily and go to the details of the name</Text>
                </View>
                <InputContainer />
                <Pressable className="w-80 bg-blue-500 rounded-lg items-center" onPress={onProceedClick}>
                    <Text className=" text-white font-bold text-lg p-2">Sign Up</Text>
                </Pressable>
            </View>
            <View className="mb-12"/>
            <DontHaveAccountView />
        </View>
    )
}

function DontHaveAccountView() { 
    const router = useRouter()
    const onRegisterClick = () => { router.push('/login') }
     return (
        <View>
            <Text className="text-md">
                Already have and account?
                <Pressable onPress={onRegisterClick}>
                <Text className="text-sm color-blue-400 font-semibold"> Login</Text>
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

function InputContainer() {
    return (
        <View className="gap-3">
            <TextInput
                placeholder="Enter your email address"
                className="min-w-80 p-4 border border-gray-300 rounded-lg bg-white border-1 text-gray-400"
            />
            <TextInput
                placeholder="Enter your password"
                className="p-4 border border-gray-300 rounded-lg bg-white border-1 text-gray-400"
            />
        </View>
    )
}