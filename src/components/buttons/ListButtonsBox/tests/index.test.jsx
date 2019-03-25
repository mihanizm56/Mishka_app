import React from 'react';
import { shallow } from 'enzyme';
import { ListButtonsBox } from '../'
import { InteractiveSVGIcon } from '../../../svgComponents';

describe('ButtonWriteReview test', () => {
    const onNextClick = jest.fn();
    const onPrevClick = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    const component = shallow(<ListButtonsBox onNextClick={onNextClick} onPrevClick={onPrevClick} />);

    describe('test render', () => {
        it('render div wrapper', () => {
            expect(component.find('.list-buttons-container').length).toEqual(1);
        });
        it('render div wrapper prev', () => {
            expect(component.find('.button-arrow_prev').length).toEqual(1);
        });
        it('render div wrapper next', () => {
            expect(component.find('.button-arrow_next').length).toEqual(1);
        });
        it('render component', () => {
            expect(component.find(InteractiveSVGIcon).length).toEqual(2);
        });

        it('snapshot test without props', () => {
            const component = shallow(<ListButtonsBox />);
            expect(component).toMatchSnapshot();
        });
    });

    describe('test props', () => {
        it('check callback prop on prev button', () => {
            expect(component.find(InteractiveSVGIcon).first().props().handleClick).toEqual(onPrevClick);
        });
        it('check callback prop on next button', () => {
            expect(component.find(InteractiveSVGIcon).last().props().handleClick).toEqual(onNextClick);
        });
    });
})
