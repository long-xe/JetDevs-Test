import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFromApiAction, refreshUserFromApiAction } from '../../store/user/user.action';
import type { AppDispatch, RootState } from '../../store/store';
import { styles } from './style';
import UserCard from '../../components/cards/home/userCard';

const results = 10;

export default function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const { users, favoriteUser } = useSelector(
    (state: RootState) => state.users,
  );

  const [page, setPage] = useState(0);
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    dispatch(getUserFromApiAction({ page: page, results }));
  }, []);


  const onLoadMore = () => {
    dispatch(getUserFromApiAction({ page: page + 1, results }));
    setPage(e => e + 1);
  };

  const onRefresh = () => {
    setIsRefresh(true);
    dispatch(refreshUserFromApiAction({page: 0, results}));
    setIsRefresh(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        initialNumToRender={10}
        maxToRenderPerBatch={1}
        data={users}
        keyExtractor={(item, idx) => `${idx + item.login.uuid}`}
        refreshing={isRefresh}
        onRefresh={onRefresh}
        onEndReached={({ distanceFromEnd }) => {
          if (distanceFromEnd < 0) return;
          onLoadMore();
        }}
        renderItem={({ item, index }) => {
          return <UserCard user={item} index={index} isFavorite={favoriteUser.some(e => e.login.uuid === item.login.uuid)}/>;
        }}
      />
    </View>
  );
}
