import React from "react";
import { shallow } from "enzyme";
import { ButtonVariable } from "../";
import { TextForButton } from "../../../texts";

describe("ButtonVariable test", () => {
	const mockClick = jest.fn();
	const testString = "test string";
	const customStyle = {
		width: "100px",
		heigth: "100px",
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe("test render", () => {
		describe("test render with all props", () => {
			const component = shallow(<ButtonVariable callback={mockClick} text={testString} customStyle={customStyle} />);

			it("render div wrapper", () => {
				expect(component.find(".button-variable-wrapper").length).toEqual(1);
			});
			it("render text component", () => {
				expect(component.find(TextForButton).length).toEqual(1);
			});
		});

		describe("test render without any props", () => {
			const component = shallow(<ButtonVariable />);

			it("render div wrapper", () => {
				expect(component.find(".button-variable-wrapper").length).toEqual(1);
			});
			it("render text component", () => {
				expect(component.find(TextForButton).length).toEqual(1);
			});
		});
	});

	describe("test props", () => {
		const component = shallow(<ButtonVariable callback={mockClick} text={testString} customStyle={customStyle} />);

		it("check text prop", () => {
			expect(component.find(TextForButton).props().text).toEqual(testString);
		});
		it("check callback prop", () => {
			expect(component.find(".button-variable-wrapper").props().onClick).toEqual(mockClick);
		});
		it("check style prop", () => {
			expect(component.find(".button-variable-wrapper").props().style).toEqual(customStyle);
		});
		it("check callback prop on default click", () => {
			ButtonVariable.defaultProps.callback = mockClick;
			const component = shallow(<ButtonVariable />);
			expect(component.find(".button-variable-wrapper").props().onClick).toEqual(mockClick);
		});
	});

	describe("action of component", () => {
		const component = shallow(<ButtonVariable callback={mockClick} text={testString} customStyle={customStyle} />);

		it("check callback on click", () => {
			component.find(".button-variable-wrapper").simulate("click");
			expect(mockClick).toHaveBeenCalled();
		});
		it("check default callback on click", () => {
			ButtonVariable.defaultProps.callback = mockClick;
			const component = shallow(<ButtonVariable />);
			component.find(".button-variable-wrapper").simulate("click");
			expect(mockClick).toHaveBeenCalled();
		});
	});
});
