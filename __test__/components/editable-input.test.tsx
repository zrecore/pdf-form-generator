
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import EditableInput from '../../src/app/components/editableInput'

describe(
  'components/editableInput',
  () => {
    it(
      'Renders the component: editableInput',
      () => {    
        render(<EditableInput isEditable={true} value="Test Input" onChange={() => {}} />)

        const dom = screen.getByTestId('test-input')
        expect(dom).toBeInstanceOf(HTMLInputElement)
        
      }
    )
  }
)
