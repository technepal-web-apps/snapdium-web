import { SessionManager } from "domain/manager/sessionmanager"
import { ConstantPreference } from "infrastructure/storage/constant.preference"
import { BaseResponseDto } from "domain/api/api.base.response"
import { networkService } from "infrastructure/network/network"
import { Alert } from "react-native"
import { create } from "zustand"
import { ApiRoutes } from "domain/api/api.routes"
import { NetworkConstants } from "@/network/network.constants"

export interface LoginState {
    userName: string | undefined,
    accessToken?: string | undefined,
    isLoggedIn?: boolean | undefined,

    setIsLoggedIn: (data: boolean | undefined) => void,
    handleLogin: (value: any) => Promise<any>,
    clearState: () => void,
}

export const userLoginStore = create<LoginState>()((set) => ({
    userName: undefined,
    accessToken: undefined,
    isLoggedIn: undefined,
    setIsLoggedIn: (value: boolean | undefined) => {
        set({ isLoggedIn: value })
    },

    handleLogin: async (data: any) => {
        try { 
            const response: BaseResponseDto = await networkService.callPostApi(ApiRoutes.LOGIN, data) 
            if(response.status) {
                console.log('login success')
                set({ isLoggedIn: true, accessToken: response.data.accessToken })
                SessionManager.SESSION_ACCESS_TOKEN = response.data.accessToken
                await SessionManager.storeData(ConstantPreference.SESSION_TOKEN, response.data.accessToken)
            } else {
                set({ isLoggedIn: undefined })
                Alert.alert('Failed to login')
            }   
        }catch(error: any) {
            alert(`Error ${error}`)
        }
    },
    clearState: () => { 
        set({ isLoggedIn: undefined })
    }
}))