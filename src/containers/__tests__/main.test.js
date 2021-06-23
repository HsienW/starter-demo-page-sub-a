import React from 'react';
import {render} from '@testing-library/react';
import {Main} from '../main';
import '@testing-library/jest-dom/extend-expect';

describe('main container', () => {
    test('should render main', () => {
        const {getByTestId} = render(<Main/>);
        expect(getByTestId('mainBlock')).toBeInTheDocument();
    });
});
