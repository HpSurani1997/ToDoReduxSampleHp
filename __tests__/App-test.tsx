/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {fireEvent, render, screen} from '@testing-library/react-native';


it('renders correctly', () => {
  render(<App />);


  // Add todo test
  const addBtn = screen.getByTestId('addBtn');
  fireEvent(addBtn, 'press');

  const todoInput = screen.getByTestId('todoInput');
  fireEvent.changeText(todoInput, 'text');
  fireEvent(addBtn, 'press');


  // list todo test
  const pendingCheck = screen.getByTestId('pendingCheck0');
  fireEvent(pendingCheck, 'onValueChange', {nativeEvent: {}});

  const completeCheck0 = screen.getByTestId('completeCheck0');
  fireEvent(completeCheck0, 'onValueChange', {nativeEvent: {}});
});
