import { StyleSheet, Text, View, Button } from "react-native";
import StateWithClassComponent from "./StateWithClassComponent";
import StateWithFuctionalComponent from "./StateWithFuctionalComponent";
import UseEffectWithClassComponent from "./UseEffectWithClassComponent";
import UseEffectWithFunctionalComponent from "./UseEffectWithFunctionalComponent";
import { useState } from "react";

export default function App() {
  const [isTrue, setIsTrue ] = useState(true);
  return (
    <View style={styles.container}>
      {/* <StateWithClassComponent /> */}
      {/* <StateWithFuctionalComponent /> */}
      {/* isTrue? <UseEffectWithClassComponent /> : null?  */}
      <UseEffectWithFunctionalComponent />
      <Button title="toggle" onPress={() => setIsTrue(!isTrue)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});