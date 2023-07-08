import { StatusBar } from 'react-native';
import styled from 'styled-components/native'
import { Navigation } from './screens/Navigation';

const AppView = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export default function App() {
  return (
    <Navigation />
  );
}
