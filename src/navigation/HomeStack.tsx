import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { IObjectPage} from './routes';
import { getObjSubPage, Router } from './routes';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Colors } from '../styles';
import type {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import type {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  FavoriteIcon,
  HomeFillIcon,
  HomeIcon,
  PinIcon,
  UnfavoriteIcon,
} from '../../assets';

interface ITabBar {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  const stackFlow = Router.HomeStack.child as IObjectPage;
  const getItems = Object.keys(stackFlow).map(val =>
    getObjSubPage(stackFlow)(val as any),
  );

  function CustomTabBar(props: ITabBar) {
    const { state, descriptors, navigation } = props;
    return (
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const TabIcon = (name: string) => {
            switch (name) {
              case 'Home':
                if (isFocused) {
                  return HomeFillIcon;
                }
                return HomeIcon;
              case 'Favorite':
                if (isFocused) {
                  return FavoriteIcon;
                }
                return UnfavoriteIcon;
            }
          };

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                ...styles.tabItem,
                borderTopWidth: isFocused ? 2 : 0,
                borderTopColor: isFocused ? Colors.primary : Colors.stroke,
              }}>
              <Image
                source={TabIcon(route.name)}
                style={styles.tabIcon}
              />
              <Text
                style={{
                  fontWeight: isFocused ? '600' : '400',
                  color: Colors.primary,
                }}>
                {label as string}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      {Object.entries(getItems).map(([_, value]) => (
        <Tab.Screen
          key={value.screen}
          name={value.screen}
          component={value.component}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 5,
  },
  tabIcon: 
    { width: 20, height: 20, tintColor: Colors.primary }
  ,
});

export default HomeStackScreen;
