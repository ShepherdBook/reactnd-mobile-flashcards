import React from 'react'
import { View, Text } from 'react-native'

export default function DeckListItem ({ title, count }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{count} questions</Text>
    </View>
  )
}