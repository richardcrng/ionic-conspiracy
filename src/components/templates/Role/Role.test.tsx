// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import Role from './Role'

describe("Reveals and hides role for an innocent player", () => {
  describe('GIVEN that Role is not passed a prop for isInAConspiracyAgainst', () => {
    let { getByText, getByRole, container, asFragment } = render(<Role inAConspiracyAgainst={undefined} />)
    beforeEach(() => {
      ({ getByText, getByRole, container, asFragment } = render(<Role inAConspiracyAgainst={undefined} />))
    })

    it("THEN the player's role is not yet revealed", () => {
      expect(container).not.toHaveTextContent(/innocent/i)
      expect(container).not.toHaveTextContent(/conspiracy/i)
    })

    describe("WHEN the text 'Reveal role is clicked on", () => {
      beforeEach(() => {
        fireEvent.click(getByText(/reveal role/i))
      })

      it("THEN the player is revealed as being innocent", () => {
        expect(container).toHaveTextContent(/innocent/i)
        expect(container).not.toHaveTextContent(/conspiracy/i)
      })
    })
  })
})

// describe('Reveals an innocent player as innocent', () => {
//   it('When passed undefined', () => {
//     const { getByText, getByRole, container, asFragment } = render(<Role inAConspiracyAgainst={undefined} />)

//     fireEvent.click(getByText('Reveal role'))

//     expect(container).toHaveTextContent('Innocent')
//     expect(container).not.toHaveTextContent('Conspiracy')
//   })
// })