import {
  View,
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { Post } from '../components/Post';
import axios from 'axios'
import { useState } from 'react';
import { Loading } from '../components/Loading';

export const Home = ({ navigation }) => {
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

  const [posts, setPosts] = useState(() => getPosts(), []);

  if (isLoading) {
    return < Loading />
  }

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('FullPost', { id: item.id })}>
              <Post
                imageUrl={item.imageUrl}
                title={item.title}
                createdAt={item.createdAt}
              />
            </TouchableOpacity>
        )}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getPosts} />}
      />
    </View>
  );
}
