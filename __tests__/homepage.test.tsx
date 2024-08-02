// HomePage.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../src/app/layout';
import { fetchSinglePage } from '@/data/Data';
import { parseHTML } from '@/utils/utils';

// Mock the fetchSinglePage and parseHTML functions
jest.mock('@/data/Data');
jest.mock('@/utils/utils');

// Ensure TypeScript understands these are mocked functions
const mockFetchSinglePage = fetchSinglePage as jest.MockedFunction<typeof fetchSinglePage>;
const mockParseHTML = parseHTML as jest.MockedFunction<typeof parseHTML>;

describe('HomePage Component', () => {

    beforeEach(() => {
        // Clear mocks before each test
        jest.clearAllMocks();
    });

    it('should fetch page data and render content', async () => {
        const mockContent = '<div>Home Page Content</div>';
        mockFetchSinglePage.mockResolvedValue({ content: mockContent });
        mockParseHTML.mockImplementation(content => <div dangerouslySetInnerHTML={{ __html: content }} />);

        render(<HomePage />);

        // Ensure fetchSinglePage is called with the correct argument
        expect(fetchSinglePage).toHaveBeenCalledWith('home');

        // Wait for the content to be rendered
        await waitFor(() => {
            expect(screen.getByText('Home Page Content')).toBeInTheDocument();
        });
    });

    it('should handle errors from fetchSinglePage', async () => {
        mockFetchSinglePage.mockRejectedValue(new Error('Failed to fetch'));
        mockParseHTML.mockImplementation(content => <div dangerouslySetInnerHTML={{ __html: content }} />);

        render(<HomePage />);

        // Ensure fetchSinglePage is called with the correct argument
        expect(fetchSinglePage).toHaveBeenCalledWith('home');

        // Add an assertion for error handling if your component displays any error message or fallback UI
        // For example:
        // await waitFor(() => {
        //     expect(screen.getByText('Error loading page')).toBeInTheDocument();
        // });
    });

    // Add more tests as needed
});