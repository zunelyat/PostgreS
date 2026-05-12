// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PostgreSQLML title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PostgreSQLML/i);
    expect(titleElement).toBeInTheDocument();
});
