import { View, FlatList } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

import { styles } from './style';
import UserCard from '../../components/cards/favorite/userCard';

export default function FavoriteScreen() {
  const { favoriteUser } = useSelector((state: RootState) => state.users);

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteUser}
        keyExtractor={(item, idx) => `${idx + item.login.uuid}`}
        renderItem={({ item }) => {
          return <UserCard user={item} />;
        }}
      />
    </View>
  );
}
