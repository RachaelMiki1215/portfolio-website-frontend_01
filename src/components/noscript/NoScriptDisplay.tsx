import Styles from "./NoScriptDisplay.module.scss";

const NoScriptDisplay: React.FC = () => {
  return (
    <noscript className={Styles.noscriptDisplay}>
      <h4>Just a reminder...</h4>
      <span>
        Hey there, it seems JavaScript isn&apos;t enabled in your browser!
        <br />
        This site might not work properly unless JavaScript is enabled.
      </span>
    </noscript>
  );
};

export default NoScriptDisplay;
