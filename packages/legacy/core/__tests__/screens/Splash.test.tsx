import { act, render } from '@testing-library/react-native'
import React from 'react'

import { AuthContext } from '../../App/contexts/auth'
import Splash from '../../App/screens/Splash'
import authContext from '../contexts/auth'
import { BasicAppContext } from '../helpers/app'

jest.mock('../../App/services/keychain', () => ({
  loadLoginAttempt: jest.fn(),
}))

describe('Splash Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  beforeAll(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.clearAllTimers()
  })
  afterAll(() => {
    jest.useRealTimers()
  })
  test('Renders default correctly', async () => {
    const tree = render(
      <BasicAppContext>
        <AuthContext.Provider value={authContext}>
          <Splash />
        </AuthContext.Provider>
      </BasicAppContext>
    )
    await act(() => {
      jest.runAllTimers()
    })
    expect(tree).toMatchSnapshot()
  })
})
