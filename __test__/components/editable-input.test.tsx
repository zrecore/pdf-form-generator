
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import EditableInput from '../../src/app/components/editableInput'

describe(
  'components/editableInput',
  () => {
    it(
      'Renders the component, and has default value: editableInput',
      () => {    
        render(<EditableInput isEditable={true} value="Test Input" onChange={() => {}} />)

        const dom = screen.getByTestId('test-input')
        expect(dom).toBeInstanceOf(HTMLInputElement)
        expect(dom).toHaveValue("Test Input")
        
      }
    )
    it (
      'Renders the component, and has NO default value: editableInput',
      () => {
        render(<EditableInput isEditable={true} value="" onChange={() => {}} />)

        const dom = screen.getByTestId('test-input')
        expect(dom).toBeInstanceOf(HTMLInputElement)
        expect(dom).toHaveValue("")
      }
    )

    it (
      'Handles the onChange event, and is editable',
      () => {}
    )

    it (
      'Handles the onChange event, and is NOT editable',
      () => {}
    )
  }
)
