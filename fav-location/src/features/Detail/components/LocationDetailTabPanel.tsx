import { TabPanel } from "@mui/lab";
import { useEffect, useState } from "react";
import { LocationDetailType } from "../../../util/LocationType";
import { getImageUrl } from "../../../util/FirebaseRepository";

type LocationDetailTabPanelProps = {
  index: number,
  detail: LocationDetailType,
}

const LocationDetailTabPanel = (props: LocationDetailTabPanelProps) => {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    async function fetch() {
      const url = await getImageUrl(props.detail.imagePath);
      setUrl(url);
    }
    fetch();
  }, [props.detail.imagePath]);

  return (
    <div>
      <TabPanel key={props.index} value={props.index.toString()}>
        タイトル：{props.detail.title}
        <br />
        説明：{props.detail.description}
        <br />
        {url && <img src={url} alt="" />}
      </TabPanel>
    </div>
  );
}

export default LocationDetailTabPanel;