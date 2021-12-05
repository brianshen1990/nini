/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import React from 'react';
import Dummy from '../Dummy';
import {render, screen} from '@testing-library/react';
const { axe, toHaveNoViolations } = require('jest-axe')
expect.extend(toHaveNoViolations)



describe('Dummy', () => {
  it('should render successfully', async () => {
    const mockClick = jest.fn();
    const { container } = render(
      <Dummy content={"test"} showContent onClick={mockClick} />
    );

    expect(
      await screen.findByText('Welcome!')
    ).toBeInTheDocument();

     expect(await axe(container)).toHaveNoViolations();
  });
});