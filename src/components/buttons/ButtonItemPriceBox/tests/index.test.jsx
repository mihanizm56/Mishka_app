import React from 'react';
import {shallow} from 'enzyme';
import {ButtonItemPriceBox} from '../';
import {InteractiveSVGIcon} from '../../../svgComponents';

describe('ButtonItemPriceBox test', () => {
    const mockClick = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('test render', () => {
        it('render div wrapper', () => {
            const component = shallow(<ButtonItemPriceBox callback={mockClick}/>);
            expect(component.find(InteractiveSVGIcon).length).toEqual(1);
        });
    })

    describe('test props', () => {
        it('check callback prop', () => {
            const component = shallow(<ButtonItemPriceBox callback={mockClick} />);
            expect(component.find(InteractiveSVGIcon).props().handleClick).toEqual(mockClick);
        });
    })
})
    