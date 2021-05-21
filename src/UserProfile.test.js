import { render, screen } from '@testing-library/react';
// import App from './App';
import UserProfile from './UserProfile';

test('renders name', () => {
  render(<UserProfile />);
  const linkElement = screen.getByText(/Anand Agarwal/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders email', () => {
  render(<UserProfile />);
  const linkElement = screen.getByText(/anand.a@bk.com/i);
  expect(linkElement).toBeInTheDocument();
});
