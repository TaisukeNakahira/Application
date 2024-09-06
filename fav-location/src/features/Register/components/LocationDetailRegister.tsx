import React, { useState } from 'react';
import { Tabs, Tab, Box  } from '@mui/material';
import TabPanel from './TabPanel';
import LocationDetailRegisterForm from './LocationDetailRegisterForm';

const LocationDetailRegister = () => {
  const [ value, setValue ] = useState(0);

  function handleValueChange(event: React.SyntheticEvent, newValue: number) {
    setValue(newValue);
  }

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs onChange={handleValueChange} aria-label="basic tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <LocationDetailRegisterForm value={value} />
      </TabPanel >
      <TabPanel value={value} index={1}>
        <LocationDetailRegisterForm value={value} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LocationDetailRegisterForm value={value} />
      </TabPanel>
    </>
  )
};

export default LocationDetailRegister;