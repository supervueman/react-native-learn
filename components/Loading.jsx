import { ActivityIndicator, Text } from 'react-native';
import styled from 'styled-components/native';

const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => (
  <LoadingView>
    <ActivityIndicator size="large" />
    <Text style={{ marginTop: 15 }}>Loading...</Text>
  </LoadingView>
)
