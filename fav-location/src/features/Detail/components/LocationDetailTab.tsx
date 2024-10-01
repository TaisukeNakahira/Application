import { TabContext, TabList } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import { LocationType } from "../../../util/LocationType";
import LocationDetailTabPanel from "./LocationDetailTabPanel";

type LocationDetailTabProps = {
  location: LocationType;
}

const LocationDetailTab = (props: LocationDetailTabProps) => {
  const [value, setValue] = useState<string>('0');

  function handleChange(_: React.SyntheticEvent, newValue: string) {
    setValue(newValue);
  }

  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} TabIndicatorProps={{ style: { backgroundColor: "green" } }}>
              {props.location.details.map((detail, index) => (
                <Tab key={index} label={detail.title} value={index.toString()} sx={{ color: 'green', '&.Mui-selected': { color: 'green', }, }} />
              ))}
            </TabList>
          </Box>
          
          {props.location.details.map((detail, index) => (
            <LocationDetailTabPanel index={index} detail={detail} />
          ))}

        </TabContext>
    </Box>
    </div>
  );
}

export default LocationDetailTab;