import { render, screen } from '@testing-library/react';
import {BrowserRouter, Route} from "react-router-dom"

import App from './App';

it('renders learn react link', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/post/i);
  expect(linkElement).toBeInTheDocument();
});
