import React from 'react'
import { Button, Alert, View } from 'react-native'
import { CredentialResponse, GoogleLogin, GoogleOAuthProvider, useGoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google'
import { networkService } from 'infrastructure/network/network'
import { ApiRoutes } from 'domain/api/api.routes'
import { TypeValueCallback } from 'domain/typealias/typealias'

export interface GoogleLoginResult {
    status?: boolean
    message?: string
    response?: CredentialResponse
}

type GoogleCallbackProp = { onResult: TypeValueCallback<GoogleLoginResult> }

export const GoogleAuthProvider: React.FC<GoogleCallbackProp> = ({ onResult }) => {

    return (
        <GoogleOAuthProvider clientId="767635659492-ds5fhg8p7ledhioudpfo9fe86b5o0k45.apps.googleusercontent.com">
           <GoogleLoginButton onResult={onResult} />
        </GoogleOAuthProvider>
    )
}

const GoogleLoginButton: React.FC<GoogleCallbackProp> = ({ onResult }) => {
    return (
        <View style={{}}>
            <GoogleLogin
                width={310}
                onSuccess={(response) => { onResult({ status: true, response: response }) }}
                onError={() => { 
                    console.error('Google Oath login error')
                 }}
            />
        </View>
    )
}