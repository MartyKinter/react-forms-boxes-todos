import { render } from '@testing-library/react';
import App from './App';
import React from "react";


test('renders without crashing', () => {
  render(<App />);
});

it("matches snapshot", function(){
  const {asFragment} = render(<App/>);
  expect(asFragment()).toMatchSnapshot();
})