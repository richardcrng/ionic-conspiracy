// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import Role from './Role'

describe("Reveals and hides role for an innocent player", () => {
  describe('GIVEN that Role is not passed a prop for isInAConspiracyAgainst', () => {
    let { getByText, getByRole, container, asFragment } = render(<Role />)
    beforeEach(() => {
      ({ getByText, getByRole, container, asFragment } = render(<Role />))
    })

    it("THEN the player's role is not yet revealed", () => {
      expect(container).not.toHaveTextContent(/innocent/i)
      expect(container).not.toHaveTextContent(/conspiracy/i)
    })

    it("AND there is 'reveal role' text shown", () => {
      expect(container).toHaveTextContent(/reveal role/i)
    })

    describe("WHEN the text 'reveal role' is clicked on", () => {
      beforeEach(() => {
        fireEvent.click(getByText(/reveal role/i))
      })

      it("THEN the player is revealed as being innocent", () => {
        expect(container).toHaveTextContent(/innocent/i)
        expect(container).not.toHaveTextContent(/conspiracy/i)
      })

      it("AND there is 'hide role' text shown", () => {
        expect(container).toHaveTextContent(/hide role/i)
      })

      describe("AND the text 'hide role' is clicked on", () => {
        beforeEach(() => {
          fireEvent.click(getByText(/hide role/i))
        })

        it("THEN the player's role is hidden again", () => {
          expect(container).not.toHaveTextContent(/innocent/i)
          expect(container).not.toHaveTextContent(/conspiracy/i)
        })
      })
    })
  })

  describe('GIVEN that Role is passed undefined as a prop for isInAConspiracyAgainst', () => {
    let { getByText, getByRole, container, asFragment } = render(<Role inAConspiracyAgainst={undefined} />)
    beforeEach(() => {
      ({ getByText, getByRole, container, asFragment } = render(<Role inAConspiracyAgainst={undefined} />))
    })

    it("THEN the player's role is not yet revealed", () => {
      expect(container).not.toHaveTextContent(/innocent/i)
      expect(container).not.toHaveTextContent(/conspiracy/i)
    })

    it("AND there is 'reveal role' text shown", () => {
      expect(container).toHaveTextContent(/reveal role/i)
    })

    describe("WHEN the text 'reveal role' is clicked on", () => {
      beforeEach(() => {
        fireEvent.click(getByText(/reveal role/i))
      })

      it("THEN the player is revealed as being innocent", () => {
        expect(container).toHaveTextContent(/innocent/i)
        expect(container).not.toHaveTextContent(/conspiracy/i)
      })

      it("AND there is 'hide role' text shown", () => {
        expect(container).toHaveTextContent(/hide role/i)
      })

      describe("AND the text 'hide role' is clicked on", () => {
        beforeEach(() => {
          fireEvent.click(getByText(/hide role/i))
        })

        it("THEN the player's role is hidden again", () => {
          expect(container).not.toHaveTextContent(/innocent/i)
          expect(container).not.toHaveTextContent(/conspiracy/i)
        })
      })
    })
  })
})

describe("Reveals and hides role for a conspiracist", () => {
  describe('GIVEN that Role is passed a string of a player name', () => {
    let { getByText, getByRole, container, asFragment } = render(<Role inAConspiracyAgainst='Richard' />)
    beforeEach(() => {
      ({ getByText, getByRole, container, asFragment } = render(<Role inAConspiracyAgainst='Richard' />))
    })

    it("THEN the player's role is not yet revealed", () => {
      expect(container).not.toHaveTextContent(/conspiracy/i)
      expect(container).not.toHaveTextContent(/richard/i)
      expect(container).not.toHaveTextContent(/innocent/i)
    })

    it("AND there is 'reveal role' text shown", () => {
      expect(container).toHaveTextContent(/reveal role/i)
    })

    describe("WHEN the text 'reveal role' is clicked on", () => {
      beforeEach(() => {
        fireEvent.click(getByText(/reveal role/i))
      })

      it("THEN the player is revealed as being in a conspiracy against that player", () => {
        expect(container).toHaveTextContent(/conspiracy/i)
        expect(container).toHaveTextContent(/richard/i)
        expect(container).not.toHaveTextContent(/innocent/i)
      })

      it("AND there is 'hide role' text shown", () => {
        expect(container).toHaveTextContent(/hide role/i)
      })

      describe("AND the text 'hide role' is clicked on", () => {
        beforeEach(() => {
          fireEvent.click(getByText(/hide role/i))
        })

        it("THEN the player's role is hidden again", () => {
          expect(container).not.toHaveTextContent(/conspiracy/i)
          expect(container).not.toHaveTextContent(/richard/i)
          expect(container).not.toHaveTextContent(/innocent/i)
        })
      })
    })
  })
})