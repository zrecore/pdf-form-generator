
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import RemoveButton from '../../src/app/components/removeButton'

describe(
  'components/removeButton',
  () => {
    it(
      'Renders the component: removeButton',
      () => {    
        render(<RemoveButton />)

        const dom = screen.getByTestId("remove-button")
        expect(dom).toBeInstanceOf(HTMLButtonElement)
        
      }
    )

    it (
      'Handles the click event: removeButton',
      () => {
        let clickValue = 0
        const handleClick = () => {
          clickValue++
        }

        render(<RemoveButton onClick={handleClick} />)

        const dom = screen.getByTestId("remove-button")

        fireEvent(dom, new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        }))

        expect(clickValue).toBe(1)

      }
    )
  }
)
