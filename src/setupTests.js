// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Install jest Mock for all the car app
import fetchMock from 'jest-fetch-mock'

// And in my test always mock the jest function.
fetchMock.enableMocks();
