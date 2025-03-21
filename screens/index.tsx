import { useNavigation,  } from '@react-navigation/native';
import { Container } from 'components/Container';
import { ScreenContent } from 'components/ScreenContent';
import { Button } from 'react-native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Button onPress={() => navigation.navigate('Form1')} title="Show details" />
      </Container>
    </>
  );
}
