import { FlatList, View, Text } from "react-native"

export default function DetailScreen() {
  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: 'gray',
        marginBottom: 32,
        opacity: 0.15 ,
        height: 0.5,
      }}
    />
  )

  return (
    <View className='flex-1 w-full items-center'>
      <FlatList
       className='w-full md:w-1/2 no-scrollbar overflow-y-auto'
        data={[234,34,34,34,34]}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({ item }) => <Text>This is the text</Text>}
      />
     </View>
  )
}
