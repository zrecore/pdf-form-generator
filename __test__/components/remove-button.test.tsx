
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
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
  }
)
