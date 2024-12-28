
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
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

    it(
      'Handles the click event: printButton',
      () => {
        let clickValue = 0
        const handleClick = () => {
          clickValue++
        }

        render(<PrintButton onClick={handleClick} />)

        const dom = screen.getByTestId("print-button")

        fireEvent(dom, new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        }))

        expect(clickValue).toBe(1)

      }
    )
  }
)
