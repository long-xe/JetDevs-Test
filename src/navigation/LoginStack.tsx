import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../constants';
import { Router } from './routes';

const Login = createNativeStackNavigator();

function LoginStackScreen() {
  return (
    <Login.Navigator>
        <Login.Screen name={NAVIGATION.login} component={Router.LoginStack.child.login.component} options={{headerShown: false}}/>
    </Login.Navigator>
  );
}

export default LoginStackScreen