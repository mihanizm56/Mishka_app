import React from 'react';
import {shallow} from 'enzyme';
import {ButtonForOffer} from '../';
import {TextForButton} from '../../../texts';

describe('ButtonForOffer test', () => {
    const testString = 'test string';
    const mockClick = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('test render', () => {
        it('render div wrapper', () => {
            const component = shallow(<ButtonForOffer text={testString} callback={mockClick}/>);
            expect(component.find('.button-offer-wrapper').length).toEqual(1);
        });
        it('render text component', () => {
            const component = shallow(<ButtonForOffer text={testString} callback={mockClick}/>);
            expect(component.find(TextForButton).length).toEqual(1);
        });
    })

    describe('test props', () => {
        it('check text prop', () => {
            const component = shallow(<ButtonForOffer text={testString} />);
            expect(component.find(TextForButton).props().text).toEqual(testString);
        });
        it('check callback prop', () => {
            const component = shallow(<ButtonForOffer callback={mockClick} />);
            expect(component.find('.button-offer-wrapper').props().onClick).toEqual(mockClick);
        });
    })

    describe('action of component', () => {
        it('check callback on click', () => {
            const component = shallow(<ButtonForOffer callback={mockClick}/>);
            component.find('.button-offer-wrapper').simulate('click');
            expect(mockClick).toHaveBeenCalled();
        });
    })
})
    