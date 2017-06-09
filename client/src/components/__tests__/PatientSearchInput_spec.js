import React from 'react';
import { mount } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PatientSearchInput from '../PatientSearchInput';

test('PatientSearchInput calls a handler onChange', () => {
  let changed = false;
  const handleChange = () => { changed = true };

  const input = mount(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <PatientSearchInput handleChange={handleChange} />
    </MuiThemeProvider>
  );

  input.find('input').simulate('change');

  expect(changed).toBe(true);
});
