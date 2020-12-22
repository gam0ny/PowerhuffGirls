import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TvShowEpisodesSectionContainer, { TvShowEpisodeListSection } from "./index";

const initialStore = {
  tvShowDetails: {
    episodes: Array(1).fill({ id: 1, name: 'Test', image: { medium: 'src' }, airdate: 'test date', season: 1, number: 1}),
    onItemClick: jest.fn(),
  }
};

const mockStore = configureStore();

describe('[Episodes] component test', () => {
  it('[Episodes] component renders properly', () => {

    const store = mockStore(initialStore);

    const component = shallow(
        <Provider store={store}>
          <TvShowEpisodesSectionContainer />
        </Provider>);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('[Episodes] onItemClick calls properly', () => {

      const component = shallow(<TvShowEpisodeListSection {...initialStore.tvShowDetails} />);

      component.find('li').simulate('click');

      expect(initialStore.tvShowDetails.onItemClick).toBeCalled();

    });

})
