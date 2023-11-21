import Styles from "./errors.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";

export default function UnderConstructionComponent({
  item = "This section",
}: {
  item?: string;
}) {
  return (
    <div className={Styles.container}>
      <h1>Nothin&apos; Here Yet...</h1>
      <FontAwesomeIcon icon={faPersonDigging} className={Styles.icon} />
      <p>
        {item} is still under construction. <br />
        Hopefully that Couch Potato gets to work soon...
      </p>
    </div>
  );
}
