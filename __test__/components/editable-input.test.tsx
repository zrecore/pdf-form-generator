
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import EditableInput from '../../src/app/components/editableInput'

describe(
  'components/editableInput',
  () => {
    it(
      'Component has default value "Test Input": editableInput',
      () => {    
        render(<EditableInput isEditable={true} value="Test Input" />)

        const dom = screen.getByTestId('test-input')
        expect(dom).toHaveValue("Test Input")
        
      }
    )
    it (
      'Component has NO default value: editableInput',
      () => {
        render(<EditableInput isEditable={true} />)

        const dom = screen.getByTestId('test-input')
        expect(dom).toHaveValue("")
      }
    )

    it (
      'Component is editable (is HTMLInputElement) : editableInput',
      () => {
        render(<EditableInput isEditable={true} value="" />)

        const dom = screen.getByTestId('test-input')
        expect(dom).toBeInstanceOf(HTMLInputElement)
        expect(dom).toHaveClass('edit-mode')
      }
    )

    it (
      'Component is NOT editable (is HTMLDivElement : editableInput',
      () => {
        render(<EditableInput isEditable={false} value="" />)

        const dom = screen.getByTestId('test-input')
        expect(dom).toBeInstanceOf(HTMLDivElement)
        expect(dom).toHaveClass('static-mode')
      }
    )

    it (
      'Component is clicked, handles click event: editableInput',
      () => {
        let clickValue = 0
        
        const handleClick = () => {
          clickValue++
        }
        render(<EditableInput isEditable={true} onClick={handleClick} value="" />)

        const dom = screen.getByTestId('test-input')

        fireEvent(dom, new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        }))
        
        expect(clickValue).toBe(1)
      }
    )

    it(
      'Component (edit-mode) is changed, handles change event: editableInput',
      () => {
        let value = ""
        const handleChange = (newValue:string) => {
          value = newValue
        }
        render(<EditableInput isEditable={true} onChange={handleChange} value="" />)

        const dom = screen.getByTestId('test-input')

        fireEvent.change(dom, {
          bubbles: true,
          cancelable: true,
          target: {value: "Test Input"}
        })
        
        expect(value).toBe("Test Input")
      }
    )

    it(
      'Component receives focus, handles onFocus event: editableInput, handleOnInputFocus()',
      () => {
        let value = null
        const handleFocus = (input:HTMLInputElement) => {
          value = input
        }
        render(<EditableInput isEditable={true} onFocus={handleFocus} value="" />)

        const dom = screen.getByTestId('test-input')

        fireEvent.focus(dom)
        
        expect(value).toBe(dom)
      }
    )

    it(
      'Component receives focus, handles onReturn event: editableInput, handleOnReturn()',
      () => {
        let value = ""
        const handleReturn = (result:string) => {
          value = result
        }
        render(<EditableInput isEditable={true} onReturn={handleReturn} value="Test" />)

        const dom = screen.getByTestId('test-input')

        fireEvent.keyUp(dom, {
          key: 'Enter',
          code: 'Enter'
        })
        
        expect(value).toBe("Test")
      }
    )
  }
)
