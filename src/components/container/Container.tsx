import Styles from "./Container.module.scss";
import { ContainerProps } from "./ContainerTypes";

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div className={`${Styles.container} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Container;
