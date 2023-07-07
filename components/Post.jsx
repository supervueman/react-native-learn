import styled from 'styled-components/native'

const PostView = styled.View`
  flex-direction: row;
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

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

// https://steamuserimages-a.akamaihd.net/ugc/965368466530689205/DBB3A8840D1B894D2B85B5D96427C37956BBCEE7/?imw=1024&imh=591&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true

export const Post = ({ title, imageUrl, createdAt }) => {
  return <PostView>
    <PostImage source={{
      uri: imageUrl
    }} />
    <PostDetails>
      <PostTitle>{ title }</PostTitle>
      <PostDate>{ createdAt }</PostDate>
    </PostDetails>
  </PostView>
}