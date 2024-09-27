import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllLocations } from "../../../util/FirebaseRepository";
import Grid from '@mui/material/Grid2';
import CardComponent from "../components/CardComponent";
import { LocationType } from "../../../util/LocationType";

const LocationListPage = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState<LocationType[]>();

  function handleRegisterButtonClick() {
    navigate("/register");
  }

  // マウント時、データを取得する
  useEffect(() => {
    async function fetch() {
      const locations = await getAllLocations();
      setLocations(locations);
    }
    fetch();
  }, []);

  return (
    <>
      <h3>リスト</h3>
      <Grid container spacing={2}>
        {locations ? locations.map(location => (
          <div key={location.id}>
            <Grid size={4}>
              <CardComponent imagePath={location.details[0].imagePath} title={location.title}></CardComponent>
            </Grid>
          </div>
        )) : null}
      </Grid>
      <Button variant="contained" onClick={handleRegisterButtonClick}>登録</Button>
    </>
  )
};

export default LocationListPage;