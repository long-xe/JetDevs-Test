import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { memo, useEffect } from 'react';
import { FavoriteIcon, PinIcon, UnfavoriteIcon } from '../../../../assets';
import { styles } from './style';
import type { IUser } from '../../../types/user';
import { Colors } from '../../../styles';
import { useDispatch } from 'react-redux';
import { toggleFavoriteUser } from '../../../store/user/user.slice';
import { getUserApi } from '../../../api/user/user.api';

function userCard({
  user,
  isFavorite,
}: {
  user: IUser;
  index: number;
  isFavorite: boolean;
}) {
  const dispatch = useDispatch();

  const toggleFavorite = (item: IUser) => {
    dispatch(toggleFavoriteUser(item));
  };
  
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.imgWrapper}>
        <Image source={{ uri: user.picture.medium }} style={styles.img} />
      </View>

      <View style={styles.contentWrapper}>
        <Text>{`${user.name.first} ${user.name.last}`}</Text>
        <View style={styles.locationWrapper}>
          <Image
            source={PinIcon}
            style={styles.locationImg}
            tintColor={Colors.stroke}
          />
          <Text
            style={
              styles.locationText
            }>{`${user.location.city}, ${user.location.country}`}</Text>
        </View>
        <View style={styles.additionalInfoWrapper}>
          <Text>Email: {user.email}</Text>
          <Text>Phone: {user.phone}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => toggleFavorite(user)}
        style={styles.favoriteImgWrapper}>
        <Image
          source={isFavorite ? FavoriteIcon : UnfavoriteIcon}
          style={styles.favoriteImg}
        />
      </TouchableOpacity>
    </View>
  );
}

export default memo(userCard);
