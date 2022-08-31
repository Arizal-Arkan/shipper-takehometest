import Card from '../components/commons/CardContent';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe("Card", () => {
    test('should render Card correctly', () => {
        render(<Card />)
    });
})