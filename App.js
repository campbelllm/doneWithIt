import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Platform, Text, StatusBar, SafeAreaView, Image } from 'react-native';
import {useDimensions} from "@react-native-community/hooks"
export default function App() {
  return ( 
    <SafeAreaView style={styles.container}>
      <Text>hello</Text>
      <Image></Image>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight
  },
});
