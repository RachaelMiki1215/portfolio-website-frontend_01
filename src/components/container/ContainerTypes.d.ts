export interface CarouselProps {
  containerClassName?: string;
  pageContainerClassName?: string;
  navigatorClassName?: string;
  orientation?: Orientation;
  children: React.ReactNode;
}

export interface SlidingDropDownProps {
  headerComponent: React.ReactNode;
  dropdownComponent: React.ReactNode;
  dropdownStyle?: React.CSSProperties;
  isOpenOnDefault?: boolean;
  changeOnClick?: boolean;
  openOnHover?: boolean;
}

export interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  style?: any;
}

// TODO: Finish up modal later on
export interface ModalProps {
  className?: string;
  style?: any;
  onBackgroundClick?: () => {};
}
