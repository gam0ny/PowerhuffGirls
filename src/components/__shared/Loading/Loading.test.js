import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import Loading from "./Loading";

const mockStore = configureStore();

describe('[Loading container] test', () => {
    it('Loading container is showed', () => {

        const store = mockStore({
            inProgress: true,
        });

        const loadingContainer = shallow(
          <Provider store={store}>
              <Loading />
          </Provider>
        );

        expect(loadingContainer.find('div.loading')).toBeTruthy();

    });

    it('Loading container is hidden', () => {

        const store = mockStore({
            inProgress: false,
        });

        const loadingContainer = shallow(
          <Provider store={store}>
              <Loading />
          </Provider>
        );

        expect(loadingContainer.find('div.loading').exists()).toBeFalsy();

    });

    it('Loading container renders correctly', () => {
        const store = mockStore({
            inProgress: true,
        });

        const loadingContainer = shallow(
          <Provider store={store}>
              <Loading />
          </Provider>
        );

        expect(toJson(loadingContainer)).toMatchSnapshot();
    });
})
