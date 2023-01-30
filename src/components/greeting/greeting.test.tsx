import { render, screen } from '@testing-library/react';
import Greeting from './greeting';

test('Greeting renders correctly', () => {
  render(<Greeting />);
  const text_element = screen.getByText(/hello/i);
  expect(text_element).toBeInTheDocument();
});

test.only('Greeting renders correctly with a name', () => {
  render(<Greeting name='Mohamed' />);
  const text_element = screen.getByText('Hello Mohamed');
  expect(text_element).toBeInTheDocument();
});
