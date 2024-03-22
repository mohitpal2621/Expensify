import React from 'react';
import { render } from '@testing-library/react';
import ExpenseSummary from '../../components/ExpenseSummary';
import { useSelector } from 'react-redux';
import expenses from '../fixtures/expenses';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'), // Use actual implementation of other hooks
  useSelector: jest.fn(), // Mock useSelector hook
}));

describe('ExpenseSummary component', () => {
  test('renders with single expense', () => {
    useSelector.mockReturnValue([expenses[1]]);

    const { container } = render(<ExpenseSummary />);

    expect(container).toMatchSnapshot();
  });

  test('renders with multiple expenses', () => {
    useSelector.mockReturnValue(expenses);

    const { container } = render(<ExpenseSummary />);

    expect(container).toMatchSnapshot();
  });
});
