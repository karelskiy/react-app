import { create } from "react-test-renderer";
import React from 'react'
import Status from "./Status";
    
describe("Button component", () => {
    test("it shows the expected text when clicked (testing the wrong way!)", () => {
      const component = create(<Status status="penis"/>);
      const instance = component.getInstance();
      expect(instance.state.value).toBe('penis');
    });
  });