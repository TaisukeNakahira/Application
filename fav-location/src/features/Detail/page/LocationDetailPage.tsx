import { useParams } from "react-router-dom";
import LocationDetailTab from "../components/LocationDetailTab";
import { useEffect, useState } from "react";
import { getLocation } from "../../../util/FirebaseRepository";
import { LocationType } from "../../../util/LocationType";
import ReturnButton from "../../Shared/components/ReturnButton";

const LocationDetailPage = () => {
  const params = useParams();
  const [ location, setLocation ] = useState<LocationType>();

  useEffect(() => {
    async function fetch() {
      if (!params.id) {
        throw new Error("idがありません");
      }

      var currentLocation = await getLocation(params.id);
      if (!currentLocation) {
        throw new Error("データがありません");
      }

      setLocation(currentLocation);
    }
    fetch();
  }, [params]);

  return (
    <>
      <h1>詳細</h1>
      {location && <LocationDetailTab location={location} />}
      <ReturnButton />
    </>
  )
};

export default LocationDetailPage;