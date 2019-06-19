// display component import
import React from 'react';
import Display from './Display';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

describe('<Display />', () => {
    describe('Component Creation', () => {
        it('renders without crashing', () => {
           const div = document.createElement('div');
           ReactDOM.render(<Display />, div);
           ReactDOM.unmountComponentAtNode(div); 
        });

        it('renders without errors', () => {
            render(<Display />)
        });
    });
});