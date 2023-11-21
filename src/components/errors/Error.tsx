import Styles from "./errors.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceDizzy } from "@fortawesome/free-regular-svg-icons";

export default function ErrorComponent() {
  return (
    <div className={Styles.container}>
      <h1>Aw shucks...</h1>
      <FontAwesomeIcon icon={faFaceDizzy} className={Styles.icon} />
      <p>An unexpected error has occurred.</p>
    </div>
  );
}
