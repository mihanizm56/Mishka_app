import React from 'react';
import {shallow} from 'enzyme';
import {ButtonWriteReview} from '../'
import {TextForButton} from '../../../texts'

describe('ButtonWriteReview test', () => {
    const mockClick = jest.fn();
    const component = shallow(<ButtonWriteReview callback={mockClick}/>);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('test render', () => {
        it('render div wrapper', () => {
            expect(component.find('.button-write-wrapper').length).toEqual(1);
        });
        it('render component', () => {
            expect(component.find(TextForButton).length).toEqual(1);
        });

        it('snapshot test without props', () => {
            const component = shallow(<ButtonWriteReview />);
            expect(component).toMatchSnapshot();
        });
    });

    describe('test props', () => {
        it('check callback prop', () => {
            expect(component.find('.button-write-wrapper').props().onClick).toEqual(mockClick);
        });
    });

    describe('action of component', () => {
        it('check callback on click', () => {
            component.find('.button-write-wrapper').simulate('click');
            expect(mockClick).toHaveBeenCalled();
        });
    })
})
    