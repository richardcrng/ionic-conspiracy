// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import ListItemIconBoolean from './ListItemIconBoolean'

describe("Shows children and", () => {
  describe('GIVEN that ListItemIconBoolean has text passed in as children', () => {
    let { getByText, getByRole, container, asFragment } = render(<ListItemIconBoolean boolean={false}>Richard</ListItemIconBoolean>)

    it("THEN the element's container has the text shown", () => {
      expect(container).toHaveTextContent('Richard')
    })
  })
})