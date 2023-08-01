export interface TimelineEventProps {
  children?: React.ReactNode;
  containerClassName?: string;
  containerStyle?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  startDate: string;
  endDate: string;
  icon?: React.ReactNode;
}

export interface SubTimelineProps {
  timelineEvent: React.ReactNode;
  timelineStartDate: number;
  timelineEndDate: number;
  alternating: boolean;
  orientation: string;
  linePosition: string;
  index: number;
}

export interface TimelineProps {
  children?: React.ReactNode;
  orientation?: string;
  linePosition?: string;
  alternating?: boolean;
  containerClassName?: string;
}
