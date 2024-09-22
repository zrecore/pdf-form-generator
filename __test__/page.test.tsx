
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'
import React from 'react'

describe(
  'About',
  () => {
    it(
      'Renders the home page',
      () => {    
        render(<Page />)

        const dom = screen.getByText('PDF Form Generator')
        expect(dom)
        .toHaveTextContent('PDF Form Generator')
      }
    )
  }
)
