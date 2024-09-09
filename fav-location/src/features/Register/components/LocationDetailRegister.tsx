import { Tabs, Tab, Box  } from '@mui/material';
import LocationDetailRegisterForm from './LocationDetailRegisterForm';
import { useLocationContext } from './EdittingLocationDataProvider';
import { TabPanel } from '@mui/lab';

const LocationDetailRegister = () => {
  const { edittingLocationData } = useLocationContext();

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example">
          {edittingLocationData.details.map((detail, index) => (
            <Tab label={detail.title} value={index.toString()} />
          ))}
        </Tabs>
      </Box>
      {edittingLocationData.details.map((detail, index) => (
        <TabPanel value={index.toString()}>
          <LocationDetailRegisterForm detailId={detail.id} />
        </TabPanel>
      ))}
    </>
  )
};

export default LocationDetailRegister;