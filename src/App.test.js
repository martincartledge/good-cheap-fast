import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h3', () => {
  render(<App />);
  expect(screen.getByText('What are your priorities?')).toBeInTheDocument();
});
