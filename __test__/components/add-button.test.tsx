
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
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
  }
)
