import { StyleSheet } from "react-native";
import { COLORS } from "../../common";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#176c45",
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  value: {
    fontWeight: "bold",
  },
  menuItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  total: {
    alignSelf: "flex-end",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    color: "red",
    paddingHorizontal: 20,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nextContainer : {
    flex: 1,
    flexDirection:'row',
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems:'center',
  },
  statusContainer: (color: any) => ({
    borderColor: color,
    color: color,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: "center",
    padding: 7,
  }),
});

export default styles;
