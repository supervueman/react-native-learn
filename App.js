import { StatusBar } from 'react-native';
import { Home } from './screens/Home';
import styled from 'styled-components/native'
import { FullPost } from './screens/FullPost';

const AppView = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export default function App() {
  return (
    <AppView>
      <Home />
      {/* <FullPost /> */}
      <StatusBar theme="auto" />
    </AppView>
  );
}
