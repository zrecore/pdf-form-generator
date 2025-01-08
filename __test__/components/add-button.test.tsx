
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import AddButton from '../../src/app/components/addButton'

describe(
  'components/addButton',
  () => {
    it(
      'Renders the component: addButton',
      () => {
        render(<AddButton />)

        const dom = screen.getByTestId("add-button")
        expect(dom).toBeInstanceOf(HTMLButtonElement)
        
      }
    )

    it(
      'Handles the button click event: addButton',
      () => {
        let clickValue = 0
        const handleClick = () => {
          clickValue++
        }
        render(<AddButton onClick={handleClick} />)

        const dom = screen.getByTestId("add-button")
        expect(dom).toBeInstanceOf(HTMLButtonElement)


        fireEvent(dom, new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        }))

        expect(clickValue).toBe(1)
      }
    )

    it(
      'Renders correctly',
      () => {
        const { container } = render(<AddButton />)
        expect(container).toMatchSnapshot()
      }
    )
  }
)
