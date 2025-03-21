import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'navigation';
import { Button, View } from 'react-native';

export default function Form1() {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <View style={{ height: 600, backgroundColor: "#f0f" }}>
      <Button onPress={() => navigation.navigate('Form2')} title="Show details" />
    </View>
  );
}
