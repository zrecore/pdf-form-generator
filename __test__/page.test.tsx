"use client"

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'
import React from 'react'

describe(
  'About',
  () => {
    it(
      'Renders the home page',
      () => {    
        render(<Page />)

        const dom = screen.getByText('List')
        expect(dom)
        .toHaveTextContent('List')
      }
    )
  }
)
