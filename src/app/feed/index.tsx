import { TypeValueCallback } from '@/typealias/typealias'
import { useRouter } from 'expo-router'
import React from 'react'
import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native'
import { RouteConstants } from "infrastructure/routing/route.constants"

const posts = [
  {
    id: '1',
    author: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    title: 'Understanding React Native Performance',
    description: 'A deep dive into optimizing React Native apps for speed and efficiency.',
    date: 'Feb 17, 2025',
    readTime: '5 min read',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: '2',
    author: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    title: 'Building Scalable Apps with React Native',
    description: 'How to structure and scale your app for long-term maintainability.',
    date: 'Feb 16, 2025',
    readTime: '7 min read',
    image: 'https://picsum.photos/id/237/200/300'
  },
  {
    id: '3',
    author: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    title: 'Understanding React Native Performance',
    description: 'A deep dive into optimizing React Native apps for speed and efficiency.',
    date: 'Feb 17, 2025',
    readTime: '5 min read',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: '4',
    author: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    title: 'Building Scalable Apps with React Native',
    description: 'How to structure and scale your app for long-term maintainability.',
    date: 'Feb 16, 2025',
    readTime: '7 min read',
    image: 'https://picsum.photos/id/237/200/300'
  },
  {
    id: '5',
    author: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    title: 'Understanding React Native Performance',
    description: 'A deep dive into optimizing React Native apps for speed and efficiency.',
    date: 'Feb 17, 2025',
    readTime: '5 min read',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: '6',
    author: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    title: 'Building Scalable Apps with React Native',
    description: 'How to structure and scale your app for long-term maintainability.',
    date: 'Feb 16, 2025',
    readTime: '7 min read',
    image: 'https://picsum.photos/id/237/200/300'
  },
  {
    id: '7',
    author: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    title: 'Understanding React Native Performance',
    description: 'A deep dive into optimizing React Native apps for speed and efficiency.',
    date: 'Feb 17, 2025',
    readTime: '5 min read',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: '8',
    author: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    title: 'Building Scalable Apps with React Native',
    description: 'How to structure and scale your app for long-term maintainability.',
    date: 'Feb 16, 2025',
    readTime: '7 min read',
    image: 'https://picsum.photos/id/237/200/300'
  },
  {
    id: '9',
    author: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    title: 'Understanding React Native Performance',
    description: 'A deep dive into optimizing React Native apps for speed and efficiency.',
    date: 'Feb 17, 2025',
    readTime: '5 min read',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: '10',
    author: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    title: 'Building Scalable Apps with React Native',
    description: 'How to structure and scale your app for long-term maintainability.',
    date: 'Feb 16, 2025',
    readTime: '7 min read',
    image: 'https://picsum.photos/id/237/200/300'
  }
]

const PostItem: React.FC<{ onClick: TypeValueCallback<any>, item: any }> = ({ item, onClick }) => {

  return (
    <Pressable onPress={() => { onClick(item) }}>
      <View style={styles.postContainer}>
        <Image source={{ uri: item.image }} style={styles.postImage} />
        <View>
          <View style={styles.header}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text style={styles.author}>{item.author}</Text>
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.meta}>{item.date} • {item.readTime}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const FeedListScreen = () => {
  const router = useRouter()

  const onItemClick = (item) => { 
    router.push(RouteConstants.DETAIL_ROUTE)
  }

  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: 'gray',
        marginBottom: 32,
        opacity: 0.15,
        height: 0.5,
      }}
    />
  )

  return (
    <View className='flex-1 w-full items-center'>
      <FlatList
        className='w-full md:w-3/4 no-scrollbar overflow-y-auto'
        data={[...posts]}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostItem item={item} onClick={onItemClick} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    // backgroundColor: '#fff',

  },
  postContainer: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 20,
    padding: 12
  },
  postImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12
  },
  content: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6
  },
  meta: {
    fontSize: 12,
    color: '#888'
  }
})

export default FeedListScreen