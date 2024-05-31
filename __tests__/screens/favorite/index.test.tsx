import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { act } from 'react-test-renderer';
import { store } from '../../../src/store/store';
import FavoriteScreen from '../../../src/screens/FavoriteScreen';


describe('favorite screen', () => {
    it('should renders screen correctly', () => {
      const page = render(
          <Provider store={store}>
            <FavoriteScreen />
          </Provider>
      );
      expect(page).toMatchSnapshot();
    });
  });