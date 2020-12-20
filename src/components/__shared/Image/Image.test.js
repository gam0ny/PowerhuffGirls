import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import Image from "./index";

describe('[Image] component test', () => {
    it('[Image] component renders properly', () => {
        const nextProps = {
            src: 'url',
            width: 100,
            height: 100,
        };

        const imageComponent = shallow(<Image {...nextProps}/>);

        expect(toJson(imageComponent)).toMatchSnapshot();
    });
})
