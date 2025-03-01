import React from 'react'
import { Pressable, Text } from 'react-native'

interface ButtonProps {
  title: string
  className?: string
  onPress: () => void
}

export const AppPrimaryButton: React.FC<ButtonProps> = ({ title, className = '', onPress }) => {
  return (
    <Pressable className={`w-80 bg-blue-500 rounded-lg items-center p-2 ${className}`} onPress={onPress}>
      <Text className="text-white font-bold text-lg">{title}</Text>
    </Pressable>
  )
}

export const AppPlainButton: React.FC<ButtonProps> = ({ title, className = '', onPress }) => {
    return (
      <Pressable className={`w-80 rounded-lg items-center p-2 ${className}`} onPress={onPress}>
        <Text className="text-gray-700 font-bold text-lg">{title}</Text>
      </Pressable>
    )
  }
  
