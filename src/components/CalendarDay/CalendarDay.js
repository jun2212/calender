import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextProps,
  ViewStyle,
  StyleProp,
  TouchableOpacityProps,
} from "react-native";

const CalendarDay = ({ date }) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>{date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: { width: "14.2%" },
  text: {
    lineHeight: 30,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },
  isNotCur: {
    color: "#C9C9C9",
  },
});

export { CalendarDay };
