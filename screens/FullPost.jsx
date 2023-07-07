import { View } from 'react-native';
import styled from 'styled-components/native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from '../components/Loading';

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPost = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getPost = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get('https://64a873bddca581464b85c12f.mockapi.io/post/1');
      setPost(data);
    } catch (error) {
      console.log(error);;
      Alert.alert('Error', 'Error fetching post!!!');
    } finally {
      setIsLoading(false);
    }
  }

  const [post, setPost] = useState(getPost, []);

  useEffect(() => getPost(), [])

  if (isLoading) {
    return (<Loading />)
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: post.imageUrl }} />
      <PostText>
        { post.text }
      </PostText>
    </View>
  )
}