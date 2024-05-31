import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Router } from "./routes";

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator initialRouteName={Router.LoginStack.screen}>
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name={Router.HomeStack.screen}
        component={Router.HomeStack.component}
      />
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name={Router.LoginStack.screen}
        component={Router.LoginStack.component}
      />
    </Stack.Navigator>
  );
};

export default AppRouter;
