
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/about/page'

describe(
  'About',
  () => {
    it(
      'Renders the /about page',
      () => {    
        render(<Page />)

        const dom = screen.getByText('About')
        expect(dom)
        .toHaveTextContent('About')
      }
    )
  }
)
