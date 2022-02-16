import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: "#039be5",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    width: "100%",
  },
  logo: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
  },
  toggleButtonContainer: {
    alignSelf: "flex-end",
    margin: 10,
  },
  section: {
    flexDirection: "row",
    marginLeft: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
