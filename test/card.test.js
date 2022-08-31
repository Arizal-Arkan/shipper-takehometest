import Card from '../components/commons/CardContent';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe("Card", () => {
    it('should render Card correctly', () => {
        render(<Card />)
    });
})