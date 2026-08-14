import { useState } from "react";
import { View, text, TouchableOpacity } from "react-native";

const AnyComponent = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>{count}</Text>
      <TouchableOpacity onPress={increaseCount}>
        <Text>Increase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnyComponent;
s;
