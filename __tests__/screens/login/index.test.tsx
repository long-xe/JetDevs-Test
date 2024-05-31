import { fireEvent, render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { act } from 'react-test-renderer';
import { ScreenTestId } from '../../../src/constants/testId';
import LoginScreen from '../../../src/screens/LoginScreen';
import { store } from '../../../src/store/store';

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({
    params: {},
  }),
  useNavigation: jest.fn(),
}));

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn(),
}));

jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: jest.fn(),
}));

jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 }
  return {
    SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({ children }) => children(inset)),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  }})

describe('main login screen', () => {
  it('should renders screen correctly', () => {
    const page = render(
        <Provider store={store}>
          <LoginScreen />
        </Provider>
    );
    expect(page).toMatchSnapshot();
  });

  it('input should type normally', () => {
    const { getByTestId } = render(
        <Provider store={store}>
          <LoginScreen />
        </Provider>
    );

    const emailInput = getByTestId(ScreenTestId.LoginScreen.emailInput);
    const passwordInput = getByTestId(ScreenTestId.LoginScreen.passwordInput);

    fireEvent.changeText(emailInput, 'test');
    fireEvent.changeText(passwordInput, 'test1');

    expect(emailInput.props.value).toBe('test');
    expect(passwordInput.props.value).toBe('test1');
  });
});
