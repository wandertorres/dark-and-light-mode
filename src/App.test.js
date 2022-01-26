import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the app with a title, a button and a copyright', () => {
  render(<App />);
  
  const headingEl = screen.getByRole('heading');
  const buttonEl = screen.getByRole('button');
  const copyrightEl = screen.getByText(/by Wander Torres/);

  expect(headingEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
  expect(copyrightEl).toBeInTheDocument();
});

test('renders the app in mode light', () => {
  render(<App />);

  const titleEl = screen.getByText(/Light Mode ON/);

  expect(titleEl).toBeInTheDocument();
});

test('', () => {
  
});
