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
        {/* <Image source={{ uri: item.image }} style={styles.postImage} /> */}
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
        marginRight: 100,
        opacity: 0.15,
        height: 0.5,
      }}
    />
  )

  return (
    <View
      style={styles.mediumLayout}>
 <View
        className="
          hidden sm:flex flex-col items-center w-16 px-2 py-8 bg-gray-50 border-r border-gray-200
          md:w-56 md:items-start md:px-6
        "
        style={styles.leftSidebar}
      >
        {/* Large screen: show text, small screen: show icons */}
        <div className="flex flex-col gap-8 w-full">
          <span className="hidden md:block font-bold text-lg mb-8 text-gray-800">Snapdium</span>
          <nav className="flex flex-col gap-6 w-full">
            <a className="flex flex-col items-center md:flex-row md:items-center gap-2 text-gray-700 hover:text-orange-500 cursor-pointer">
              {/* <FaHome className="text-xl" /> */}
              <span className="hidden md:inline">Home</span>
            </a>
            <a className="flex flex-col items-center md:flex-row md:items-center gap-2 text-gray-700 hover:text-orange-500 cursor-pointer">
              {/* <FaFire className="text-xl" /> */}
              <span className="hidden md:inline">Trending</span>
            </a>
            <a className="flex flex-col items-center md:flex-row md:items-center gap-2 text-gray-700 hover:text-orange-500 cursor-pointer">
              {/* <FaBookmark className="text-xl" /> */}
              <span className="hidden md:inline">Bookmarks</span>
            </a>
            <a className="flex flex-col items-center md:flex-row md:items-center gap-2 text-gray-700 hover:text-orange-500 cursor-pointer">
              {/* <FaUser className="text-xl" /> */}
              <span className="hidden md:inline">Profile</span>
            </a>
          </nav>
        </div>
      </View>

      <View className='w-full md:w-3/4 max-w-2xl py-8'>
        <FlatList 
          style={styles.listWidth}
          data={[...posts]}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PostItem item={item} onClick={onItemClick} />}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
      <View className='flex-1 pt-8 px-4 md:px-0 invisible lg:visible' style={styles.rightSidebar}>
        <Text style={styles.sidebarTitle}>Recommended Topics</Text>
        <Text style={styles.sidebarItem}>React Native</Text>
        <Text style={styles.sidebarItem}>Mobile</Text>
        <Text style={styles.sidebarItem}>Design</Text>
        <Text style={styles.sidebarItem}>Productivity</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  sidebarTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 18,
    color: '#333',
  },
  sidebarItem: {
    fontSize: 15,
    marginBottom: 14,
    color: '#666',
  },
  mediumLayout: {
    flex: 1,
    flexDirection: 'row',
     'justifyContent': 'center',
     backgroundColor: '#FAFAFA',
    alignItems: 'stretch',
  },
  leftSidebar: {
    flex: 1,
    padding: 24,
    borderRightWidth: 0,
    borderRightColor: '#EEE',
    justifyContent: 'flex-start',
  },
  centerFeed: {
    flex: 1,
    alignSelf: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  rightSidebar: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FAFAFA',
    borderLeftWidth: 0  ,
    borderLeftColor: '#EEE',
    justifyContent: 'flex-start',
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA726', // orange-400
    width: '100%',
  },
  listWidth: {
    flex: 1
  },
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