
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import PhotoButton from '../../src/app/components/photoButton'

describe(
  'components/photoButton',
  () => {
    it(
      'Renders the component: photoButton',
      () => {    
        render(<PhotoButton />)

        const dom = screen.getByTestId("photo-button")
        expect(dom).toBeInstanceOf(HTMLButtonElement)
        
      }
    )

    it(
      'Handles the button click event: photoButton',
      () => {
        let clickValue = 0
        const handleClick = () => {
          clickValue++
        }

        render(<PhotoButton onClick={handleClick} />)

        const dom = screen.getByTestId("photo-button")

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
        const { container } = render(<PhotoButton />)
        expect(container).toMatchSnapshot()
      }
    )
  }
)
