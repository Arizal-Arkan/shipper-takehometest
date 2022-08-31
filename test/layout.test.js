import Layout from '../components/layout/layout';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe("Header", () => {
    it('should render Layout correctly', () => {
        render(<Layout />)
    });
})