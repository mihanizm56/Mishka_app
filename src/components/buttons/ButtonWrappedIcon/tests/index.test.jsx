import React from 'react';
import { shallow } from 'enzyme';
import { ButtonWrappedIcon } from '../';
import { InteractiveSVGIcon } from '../../../svgComponents'

describe('ButtonWrappedIcon test', () => {
    const mockClick = jest.fn();
    const testString = 'test string';
    const customWidth = '100px';
    const customHeight = '100px';
    const defaultString =  "no icon"

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('test render', () => {
        describe('render with all props', () => {
            const component = shallow(<ButtonWrappedIcon  width={customWidth} height={customHeight} icon={testString} handleClick={mockClick} noOpacityChange />);
            
            it('render wrapper', () => {
                expect(component.find('.button-wrapped-icon').length).toEqual(1);
            });
            it('render component', () => {
                expect(component.find(InteractiveSVGIcon).length).toEqual(1);
            });
        })
        describe('render without any props', () => {
            const component = shallow(<ButtonWrappedIcon />);

            it('render wrapper', () => {
                expect(component.find('.button-wrapped-icon').length).toEqual(1);
            });
            it('render component', () => {
                expect(component.find(InteractiveSVGIcon).length).toEqual(1);
            });
        })
    })

    describe('test props', () => {
        describe('with all props on component', () => {
            const component = shallow(<ButtonWrappedIcon  width={customWidth} height={customHeight} icon={testString} handleClick={mockClick} noOpacityChange />);

            it('check style prop on wrapper', () => {
                expect(component.find('.button-wrapped-icon').props().style).toEqual({width: customWidth,height: customHeight});
            });
            it('check onClick prop on wrapper', () => {
                expect(component.find('.button-wrapped-icon').props().onClick).toEqual(mockClick);
            });
            it('check handleClick prop on InteractiveSVGIcon', () => {
                expect(component.find(InteractiveSVGIcon).props().handleClick).toEqual(mockClick);
            });
            it('check icon prop', () => {
                expect(component.find(InteractiveSVGIcon).props().icon).toEqual(testString);
            });
            it('check noOpacityChange prop', () => {
                expect(component.find(InteractiveSVGIcon).props().noOpacityChange).toBeTruthy();
            });
        })
        describe('without any props', () => {
            const component = shallow(<ButtonWrappedIcon />);

            it('snapshot test', () => {
                expect(component).toMatchSnapshot();
            });
        })
    })

    describe('action of component', () => {
        const component = shallow(<ButtonWrappedIcon handleClick={mockClick} />);

        it('check callback on click', () => {
            component.find('.button-wrapped-icon').simulate('click');
            expect(mockClick).toHaveBeenCalled();
        });
    })
})
