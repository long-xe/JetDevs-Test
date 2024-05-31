import { StyleSheet } from "react-native";
import { Colors, Radius } from "../../../styles";
import { scale } from "../../../utils/scaling";

export const styles = StyleSheet.create({
  cardWrapper: {
    marginLeft: scale(10),
    marginRight: scale(-20),
    padding: scale(10),
    paddingLeft: 0,
    width: "97%",
    backgroundColor: Colors.white,
    marginBottom: scale(10),
    borderRadius: Radius.l,
    flexDirection: "row",
    alignItems: "center",
  },
  imgWrapper: {
    left: -10,
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 50,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  contentWrapper: {
    flexDirection: "column",
    gap: 5,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  locationImg: {
    width: 10,
    height: 10,
  },
  locationText: {
    color: Colors.stroke,
  },
  additionalInfoWrapper: {
    gap: 2,
  },
  favoriteImgWrapper: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  favoriteImg: {
    width: 16,
    height: 16,
    tintColor: Colors.primary,
  },
});
