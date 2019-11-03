// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement, getByTitle, Matcher, MatcherOptions, queryByTestId } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import ListItemIcon from './ListItemIcon'

let container: HTMLElement
let getByText: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByTestId: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement

describe("ListItemIcon shows its children", () => {
  describe('WHEN it is given a simple text node', () => {
    beforeEach(() => {
      ({ container, getByText, getByTestId } = render(<ListItemIcon>Richard</ListItemIcon>))
    })

    test("THEN it contains that text content", () => {
      expect(getByText('Richard')).toBeDefined()
    })

    test("AND it does not show any icon", () => {
      expect(queryByTestId(container, 'icon-of-ListItemIcon')).toBeNull()
    })
  })

  describe("WHEN it is given a more complex node", () => {
    beforeEach(() => {
      ({ container } = render(
        <ListItemIcon>
          <div>
            <h2>Header</h2>
            <p>Paragraph</p>
          </div>
        </ListItemIcon>
      ))
    })

    it("Passes down children as a more complex node", () => {
      expect(container).toHaveTextContent('Header')
      expect(container).toHaveTextContent('Paragraph')
    })
  })
})

describe("ListItemIcon shows an IonIcon", () => {
  describe("WHEN ListItemIcon is passed an icon prop", () => {
    beforeEach(() => {
      ({ getByTestId, container } = render(
        <ListItemIcon icon='checkbox'>
          Richard
      </ListItemIcon>
      ))
    })

    test("THEN it shows an icon", () => {
      expect(getByTestId('icon-of-ListItemIcon')).toBeDefined()
    })

    test("AND it implements the required ion-icon API for the given icon at the end slot", () => {
      expect(getByTestId('icon-of-ListItemIcon')).toHaveAttribute('name', 'checkbox')
      expect(getByTestId('icon-of-ListItemIcon')).toHaveAttribute('slot', 'end')
    })
  })
})