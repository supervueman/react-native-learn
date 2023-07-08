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

const PostTitle = styled.Text`
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPost = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(getPost, []);

  const { id } = route.params;

  const getPost = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`https://64a873bddca581464b85c12f.mockapi.io/post/${id}`);
      setPost(data);

      navigation.setOptions({
        title: data.title,
      });
    } catch (error) {
      console.log(error);;
      Alert.alert('Error', 'Error fetching post!!!');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPost();
  }, [])

  if (isLoading) {
    return (<Loading />)
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: post.imageUrl }} />
      <PostTitle>
        { post.title }
      </PostTitle>
      <PostText>
        { post.text }
      </PostText>
    </View>
  )
}