import SignOutButton from '@/components/SignOutButton'
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <SignOutButton />
    </SafeAreaView>
  )
}

export default HomeScreen