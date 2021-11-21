import React from 'react';
import { Button } from '.';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const setup = () => {
  render(<Button type="Primary" />);
};

describe('Button', () => {
  it('Should be rendered', () => {
    setup();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
