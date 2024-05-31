import { StyleSheet } from "react-native";
import { windowDimensions } from "../../utils/dimension";
import { Colors, Radius, SizeFonts } from "../../styles";
import { scale } from "../../utils/scaling";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  wrapper: {
    marginHorizontal: scale(20),
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  imgWrapper: {
    height: 60,
    width: 60,
    position: "absolute",
    top: -30,
    left: windowDimensions.width / 2 - 50,
    borderRadius: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
  contentWrapper: {
    justifyContent: "space-around",
    height: "80%",
    alignItems: "center",
    paddingHorizontal: scale(30),
  },
  title: {
    fontSize: SizeFonts.h3,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.black
  },
  inputWrapper: {
    width: "100%",
    gap: scale(30),
  },
  btn: {
    backgroundColor: Colors.primary,
    width: "100%",
    padding: scale(14),
    borderRadius: Radius.s,
  },
  btnText: {
    color: Colors.white,
    fontSize: SizeFonts.l,
    fontWeight: "700",
    textAlign: "center",
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
  }
});
