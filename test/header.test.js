import Header from '../components/layout/header';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe("Header", () => {
    test('Render Header', () => { 
        render(<Header />);
        const textElement = screen.getByTestId('text-container');
        const textUserName = screen.getByTestId('text-user-name');

        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveTextContent('Hello,')
        expect(textUserName).toBeInTheDocument();
     })
})