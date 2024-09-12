import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllLocations } from "../../../util/FirebaseRepository";
import { LocationType } from "../../Register/hooks/useLocationData";
import Grid from '@mui/material/Grid2';
import CardComponent from "../components/CardComponent";

const LocationListPage = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState<LocationType[]>();

  function handleRegisterButtonClick() {
    navigate("/register");
  }

  // マウント時、データを取得する
  useEffect(() => {
    async function fetch() {
      const locs = await getAllLocations();
      setLocations(locs);
    }
    fetch();
  }, []);

  return (
    <>
      <h3>リスト</h3>
      <Grid container spacing={2}>
        {locations ? locations.map((location, _) => (
          <Grid size={4}>
            {/* <CardComponent imagePath={location.details[0].imagePath} title={location.name}></CardComponent> */}
            <CardComponent imagePath='' title={location.name}></CardComponent>
          </Grid>
        )) : null}
      </Grid>
      <Button variant="contained" onClick={handleRegisterButtonClick}>登録</Button>
    </>
  )
};

export default LocationListPage;