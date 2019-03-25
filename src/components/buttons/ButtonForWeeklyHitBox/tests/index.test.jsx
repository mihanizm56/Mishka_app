import React from 'react';
import {shallow} from 'enzyme';
import {ButtonForWeeklyHitBox} from '../';
import {ButtonVariable} from '../../';

describe('ButtonForWeeklyHitBox test', () => {
    const mockClick = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('test render', () => {
        it('render div wrapper', () => {
            const component = shallow(<ButtonForWeeklyHitBox callback={mockClick}/>);
            expect(component.find(ButtonVariable).length).toEqual(1);
        });
    })

    describe('test props', () => {
        it('check callback prop', () => {
            const component = shallow(<ButtonForWeeklyHitBox callback={mockClick} />);
            expect(component.find(ButtonVariable).props().callback).toEqual(mockClick);
        });
    })
})
    