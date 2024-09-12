import { Tabs, Tab, Box  } from '@mui/material';
import LocationDetailRegisterForm from './LocationDetailRegisterForm';
import { useLocationContext } from './EdittingLocationDataProvider';
import { TabPanel } from '@mui/lab';

// Todo: ユーザーがタブを追加できるようにする（タブ追加時、場所詳細データも追加）
const LocationDetailRegister = () => {
  const { locationData } = useLocationContext();

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example">
          {locationData.details.map((detail, index) => (
            <Tab label={detail.title} value={index.toString()} />
          ))}
        </Tabs>
      </Box>
      {locationData.details.map((detail, index) => (
        <TabPanel value={index.toString()}>
          <LocationDetailRegisterForm detailId={detail.id} />
        </TabPanel>
      ))}
    </>
  )
};

export default LocationDetailRegister;