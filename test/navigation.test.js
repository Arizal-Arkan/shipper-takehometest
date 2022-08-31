import Navigation from '../components/layout/navigation';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe("Navigation", () => {
    test('should render Navigation correctly', () => {
        render(<Navigation />);

        const navItems = screen.getAllByTestId('navigation-item');

        expect(navItems).toHaveLength(3);

    });
});