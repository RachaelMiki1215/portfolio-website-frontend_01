export interface CarouselProps {
    containerClassName?: string;
    pageContainerClassName?: string;
    navigatorClassName?: string;
    children: React.ReactNode;
}

export interface SlidingDropDownProps {
    headerComponent: React.ReactNode;
    dropdownComponent: React.ReactNode;
    isOpenOnDefault?: boolean;
    changeOnClick?: boolean;
}

export interface ContainerProps {
    children?: React.ReactNode;
    className?: string;
    style?: any;
}