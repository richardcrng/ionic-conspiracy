// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement, getByTitle, Matcher, MatcherOptions, queryByTestId, getByLabelText, getAllByTestId, queryAllByTestId } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import Voting from './Voting';

let container: HTMLElement
let getByText: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByTestId: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement

describe('It converts an array of data into appropriate elements', () => {
  describe('GIVEN an array of data with no ids', () => {
    beforeEach(() => {
      const data: [string, boolean][] = [
        ['Richard', true],
        ['Gregor', false],
        ['Jules', true]
      ];
      ({ container, getByText } = render(<Voting data={data} />))
    })

    test('THEN it renders all of the text from the first element of each element in the array', () => {
      expect(getByText('Richard')).toBeDefined()
      expect(getByText('Gregor')).toBeDefined()
      expect(getByText('Jules')).toBeDefined()
    })

    test('AND it renders an icon for every true in the second element of each element in the array', () => {
      expect(queryAllByTestId(container, 'icon-of-ListItemIcon')).toHaveLength(2)
    })

    test('AND it shows that you can vote for a conspiracy or no conspiracy', () => {
      // expect(getByText(/vote/i)).toBeDefined()
      expect(getByText(/(?<!no )conspiracy/i)).toBeDefined()
      expect(getByText(/no conspiracy/i)).toBeDefined()
    })
  })
})