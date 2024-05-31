import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { FavoriteIcon } from '../../../../assets';
import { styles } from './style';
import type { IUser } from '../../../types/user';
import { useDispatch } from 'react-redux';
import { toggleFavoriteUser } from '../../../store/user/user.slice';

function userCard({
  user,
}: {
  user: IUser;
}) {
  const dispatch = useDispatch();

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardContent}>
        <View style={styles.avatarWrapper}>
          <Image source={{ uri: user.picture.medium }} style={styles.avatar} />
        </View>
        <Text>{`${user.name.first} ${user.name.last}`}</Text>
      </View>

      <TouchableOpacity onPress={() => dispatch(toggleFavoriteUser(user))}>
        <Image source={FavoriteIcon} style={styles.favoriteImg} />
      </TouchableOpacity>
    </View>
  );
}

export default memo(userCard);
