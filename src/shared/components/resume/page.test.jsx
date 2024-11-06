import React from 'react';
import Resume from './page';

// Mock the fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({
            results: [
                {},
                { original_title: 'Mocked Movie Title' }
            ]
        }),
    })
);

describe('Resume Component', () => {
    beforeEach(() => {
        fetch.mockClear();
    });
});
