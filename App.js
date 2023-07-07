import { StatusBar, Alert, FlatList, ActivityIndicator, Text, RefreshControl } from 'react-native';
import { Post } from './components/Post';
import styled from 'styled-components/native'
import axios from 'axios'
import { useState } from 'react';

const AppView = styled.View`
  flex: 1;
  background-color: #ffffff;
`

const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const AppText = styled.Text``

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get('https://64a873bddca581464b85c12f.mockapi.io/post');
      setPosts(data);
    } catch (error) {
      console.log(error);;
      Alert.alert('Error', 'Error fetching posts!!!');
    } finally {
      setIsLoading(false);
    }
  }

  const [posts, setPosts] = useState(getPosts, []);

  if (isLoading) {
    return (
      <LoadingView>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Loading...</Text>
      </LoadingView>
    )
  }

  return (
    <AppView>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post
          imageUrl={item.imageUrl}
          title={item.title}
          createdAt={item.createdAt}
        />}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getPosts} />}
      />
      <StatusBar theme="auto" />
    </AppView>
  );
}
