"use client"

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'
import React from 'react'

describe(
  'About',
  () => {
    it(
      'Renders the main page',
      () => {    
        render(<Page />)

        const dom = screen.getByText('List Name')
        expect(dom)
        .toHaveTextContent('List Name')
      }
    )

    it(
      'Adds a new task',
      () => {}
    )

    it(
      'Removes a task',
      () => {}
    )

    it(
      'Updates a task',
      () => {}
    )

    it(
      'Updates the header title',
      () => {}
    )

    it(
      'Adds a column',
      () => {}
    )

    it(
      'Removes a column',
      () => {}
    )

    it(
      'Adds a row',
      () => {}
    )

    it(
      'Removes a row',
      () => {}
    )

    it(
      'Can undo state',
      () => {}
    )

    it(
      'Can redo state',
      () => {}
    )

    it(
      'Can save state to storage',
      () => {}
    )

    it(
      'Can load state from storage',
      () => {}
    )

    it(
      'Can create a new list',
      () => {}
    )

    it(
      'Can export the list',
      () => {}
    )

    it(
      'Can import the list',
      () => {}
    )
  }
)
