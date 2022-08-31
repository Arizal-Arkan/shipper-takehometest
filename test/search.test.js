import BoxSearch from '../components/commons/BoxSearch';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe("BoxSearch", () => {
    test('should render BoxSearch correctly', () => {
        render(<BoxSearch />)
    });

    test('allow to search driver name', () => {
        render(<BoxSearch/>)

        userEvent.type(screen.getByLabelText('Search'), 'Adrew')
    });
})