import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,
    padding: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },

  footer: {
    alignItems: "flex-end",
  },
  author: {
    fontStyle: "italic",
  },
});
