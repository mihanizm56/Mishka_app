import React from "react";
import { shallow } from "enzyme";
import { ButtonForSendOffer } from "../";
import { OpenSansText} from "../../../texts";

describe("ButtonForSendOffer test", () => {
	const mockClick = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe("test render", () => {
		it("render div wrapper", () => {
			const component = shallow(<ButtonForSendOffer callback={mockClick} />);
			expect(component.find(".button-send-wrapper").length).toEqual(1);
		});
		it("render text component", () => {
			const component = shallow(<ButtonForSendOffer callback={mockClick} />);
			expect(component.find(TextForButton).length).toEqual(1);
		});

		it("render snap without any props", () => {
			const component = shallow(<ButtonForSendOffer />);
			expect(component).toMatchSnapshot(1);
		});
	});

	describe("test props", () => {
		it("check callback prop", () => {
			const component = shallow(<ButtonForSendOffer callback={mockClick} />);
			expect(component.find(".button-send-wrapper").props().onClick).toEqual(mockClick);
		});
	});

	describe("action of component", () => {
		it("check callback on click", () => {
			const component = shallow(<ButtonForSendOffer callback={mockClick} />);
			component.find(".button-send-wrapper").simulate("click");
			expect(mockClick).toHaveBeenCalled();
		});
		it("check callback on default click", () => {
			ButtonForSendOffer.defaultProps.callback = mockClick;
			const component = shallow(<ButtonForSendOffer />);
			component.find(".button-send-wrapper").simulate("click");
			expect(mockClick).toHaveBeenCalled();
		});
	});
});
