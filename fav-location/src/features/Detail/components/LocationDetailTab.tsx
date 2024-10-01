import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import { LocationType } from "../../../util/LocationType";

type LocationDetailTabProps = {
  location: LocationType;
}

const LocationDetailTab = (props: LocationDetailTabProps) => {
  const [value, setValue] = useState<number>(0);

  function handleChange(_: React.SyntheticEvent, newValue: number) {
    setValue(newValue);
  }

  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} TabIndicatorProps={{ style: { backgroundColor: "green" } }}>
              {props.location.details.map((location, index) => (
                <Tab key={index} label={location.title} value={index} sx={{ color: 'green', '&.Mui-selected': { color: 'green', }, }} />
              ))}
              {/* <Tab label="Item One" value="1" sx={{ color: 'green', '&.Mui-selected': { color: 'green', }, }} />
              <Tab label="Item Two" value="2" sx={{ color: 'green', '&.Mui-selected': { color: 'green', }, }} />*/}
            </TabList>
          </Box>
         
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
    </Box>
    </div>
  );
}

export default LocationDetailTab;