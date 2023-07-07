import { StatusBar, View } from 'react-native';
import styled from 'styled-components/native'

const Post = styled.View`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export default function App() {
  return (
    <View>
      <Post>
        <PostImage source={{
          uri: 'https://steamuserimages-a.akamaihd.net/ugc/965368466530689205/DBB3A8840D1B894D2B85B5D96427C37956BBCEE7/?imw=1024&imh=591&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
        }} />
      </Post>
      <StatusBar theme="auto" />
    </View>
  );
}
