// index.test.js
import React  from "react"
import ReactDOM from "react-dom"
import App from "./App"

// mocks react-dom and its render method
// so that we can assert that render is
// called with <App /> and HTML element with id = root
jest.mock("react-dom", () => ({ render: jest.fn() }))

test("renders with App and root div", () => {
  // Create and append to document body
  // an HTML element with id = root
  const root = document.createElement("div")
  root.id = "swipoo"
  document.body.appendChild(root)

  // Requires index.js so that react-dom render method is called
  require("./index.js")

   // Asserts render was called with <App />
  // and HTML element with id = root

  expect(ReactDOM.render).toHaveBeenCalledWith(
    <React.StrictMode>

          <App />

    </React.StrictMode>
  , root)
})
