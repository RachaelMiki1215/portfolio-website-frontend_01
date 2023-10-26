export interface CarouselProps {
    containerClassName?: string;
    pageContainerClassName?: string;
    navigatorClassName?: string;
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