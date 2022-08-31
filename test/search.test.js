import BoxSearch from '../components/commons/BoxSearch';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe("BoxSearch", () => {
    it('should render Layout correctly', () => {
        render(<BoxSearch />)
    });

    it('allow to search driver name', () => {
        render(<BoxSearch/>)

        userEvent.type(screen.getByLabelText('Search'), 'Adrew')
    });
})