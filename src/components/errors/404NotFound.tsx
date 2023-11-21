import Styles from "./errors.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";

export default function NotFoundComponent({
  itemName = "item",
}: {
  itemName?: string;
}) {
  return (
    <div className={Styles.container}>
      <h1>Hmmm...</h1>
      <FontAwesomeIcon icon={faFaceFrown} className={Styles.icon} />
      <p>{itemName} cannot be found.</p>
    </div>
  );
}
