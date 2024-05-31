import { StyleSheet } from 'react-native';
import { Colors, Radius } from '../../styles';
import { scale } from '../../utils/scaling';

export const styles = StyleSheet.create({
  container: { flex: 1 },
  cardWrapper: {
    padding: scale(10),
    width: '100%',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.stroke,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: scale(10),
  },
  avatarWrapper: {
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 50,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  favoriteImg: {
    width: 24,
    height: 24,
    tintColor: Colors.primary,
  },
  cardContent: {
    flexDirection: 'row',
    gap: scale(10),
    alignItems: 'center',
  },
});
