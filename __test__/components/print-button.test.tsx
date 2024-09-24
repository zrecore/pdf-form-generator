
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import PrintButton from '../../src/app/components/printButton'

describe(
  'components/printButton',
  () => {
    it(
      'Renders the component: printButton',
      () => {    
        render(<PrintButton />)

        const dom = screen.getByTestId("print-button")
        expect(dom).toBeInstanceOf(HTMLButtonElement)
        
      }
    )
  }
)
