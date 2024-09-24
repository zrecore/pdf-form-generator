
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
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
  }
)
