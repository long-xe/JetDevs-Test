import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { act } from 'react-test-renderer';
import { store } from '../../../src/store/store';
import HomeScreen from '../../../src/screens/HomeScreen';


describe('home screen', () => {
    it('should renders screen correctly', () => {
      const page = render(
          <Provider store={store}>
            <HomeScreen />
          </Provider>
      );
      expect(page).toMatchSnapshot();
    });
  });