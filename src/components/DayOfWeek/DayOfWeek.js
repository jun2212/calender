import { StyleSheet, Text, View } from "react-native";

import { WEEK } from "../../config/constants";

const DayOfWeek = () => {
  return (
    <View style={styles.dayOfWeek}>
      {WEEK.map((item) => (
        <Text style={hasPropsStyles(item.color).day} key={"key_" + item.day}>
          {item.day}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dayOfWeek: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const hasPropsStyles = (color) =>
  StyleSheet.create({
    day: { color: color },
  });

export { DayOfWeek };
