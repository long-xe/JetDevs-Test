import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LockLogo, MailLogo, MockLogo } from '../../../assets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../styles';
import TextField from '../../components/inputs';
import { emailCheck, passwordCheck } from '../../utils/validation';
import type { RootState } from '../../store/store';
import { styles } from './style';
import { checkLoginState } from '../../store/login/login.slice';
import { GlobalStyle } from '../../styles/globalStyle';
import { ScreenTestId } from '../../constants/testId';

enum EFocusInput {
  None = 'none',
  Password = 'password',
  Email = 'email',
}

export default function LoginScreen() {
  const dispatch = useDispatch();
  const { isValidAccount } = useSelector((state: RootState) => state.login);
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [currentFocus, setCurrentFocused] = useState(EFocusInput.None);

  const [error, setError] = useState(false);

  const checkLogin = () => {
    if (!emailCheck(email).error && !passwordCheck(password).error) {
      setError(false);
      dispatch(checkLoginState({ email: email, password: password }));
    } else {
      setError(true);
    }
  };

  return (
    <View style={{ ...styles.container, marginVertical: insets.top + 60 }}>
      <View style={styles.wrapper}>
        <View style={styles.imgWrapper}>
          <Image source={MockLogo} resizeMode="contain" style={styles.img} />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>LOGIN</Text>
          <View style={styles.inputWrapper}>
            <TextField
              testID={ScreenTestId.LoginScreen.emailInput}
              styleContainer={GlobalStyle.fullWidth}
              style={{
                ...styles.input,
                borderColor:
                  currentFocus === EFocusInput.Email
                    ? Colors.primary
                    : Colors.stroke,
              }}
              placeholder="Email"
              leftIcon={MailLogo}
              autoCapitalize="none"
              tintColor={
                currentFocus === EFocusInput.Email ? Colors.primary : undefined
              }
              onFocus={() => {
                setCurrentFocused(EFocusInput.Email);
              }}
              onBlur={() => {
                setCurrentFocused(EFocusInput.None);
              }}
              onChangeText={text => {
                setEmail(text);
              }}
              value={email}
              errorMessage={error ? emailCheck(email).errorMessage : undefined}
            />
            <TextField
              testID={ScreenTestId.LoginScreen.passwordInput}
              styleContainer={GlobalStyle.fullWidth}
              style={{
                ...styles.input,
                borderColor:
                  currentFocus === EFocusInput.Password
                    ? Colors.primary
                    : Colors.stroke,
              }}
              placeholder="Password"
              leftIcon={LockLogo}
              autoCapitalize="none"
              secureTextEntry={true}
              tintColor={
                currentFocus === EFocusInput.Password
                  ? Colors.primary
                  : undefined
              }
              onFocus={() => {
                setCurrentFocused(EFocusInput.Password);
              }}
              onBlur={() => {
                setCurrentFocused(EFocusInput.None);
              }}
              onChangeText={text => {
                setPassword(text);
              }}
              value={password}
              errorMessage={
                error
                  ? passwordCheck(password).errorMessage
                  : !isValidAccount
                  ? 'Login failed! Please check email or password!'
                  : undefined
              }
            />
          </View>

          <TouchableOpacity onPress={() => checkLogin()} style={styles.btn}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
