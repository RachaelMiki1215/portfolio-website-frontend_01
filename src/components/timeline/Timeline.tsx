"use client";

import React, { useState } from "react";
import Styles from "./Timeline.module.scss";
import {
  TimelineEventProps,
  SubTimelineProps,
  TimelineProps,
} from "./TimelineTypes";

// TODO: Eventually resolve all TS2339 errors that have been temporarily suppressed with "@ts-ignore"

const TimelineEvent: React.FC<TimelineEventProps> = ({
  children,
  containerClassName,
  containerStyle,
  startDate,
  endDate,
  icon,
}) => {
  return (
    <div
      className={`${Styles.timelineEventContainer} ${containerClassName}`}
      style={containerStyle}
    >
      {children}
    </div>
  );
};

const SubTimeline: React.FC<SubTimelineProps> = ({
  timelineEvent,
  timelineStartDate,
  timelineEndDate,
  orientation,
  linePosition,
  alternating,
  index,
}) => {
  const startPosition: number =
    (1 -
      // @ts-ignore
      (Date.parse(timelineEvent.props.startDate) - timelineStartDate) /
        (timelineEndDate - timelineStartDate)) *
    100;

  const endPosition: number =
    // @ts-ignore
    timelineEvent.props.endDate
      ? (1 -
          // @ts-ignore
          (Date.parse(timelineEvent.props.endDate) - timelineStartDate) /
            (timelineEndDate - timelineStartDate)) *
        100
      : 0;

  return (
    <div key={Math.random().toString()} className={Styles.subTimelineContainer}>
      {/* @ts-ignore */}
      {timelineEvent.props.startDate !== timelineEvent.props.endDate ? (
        <div
          className={Styles.bracket}
          style={{
            top: `${endPosition}%`,
            height: `calc(${startPosition - endPosition}% - 4px)`,
            transform: `scale(${alternating && index % 2 === 1 ? -1 : 1})`,
          }}
        ></div>
      ) : null}
      <div
        className={Styles.pointer}
        style={{
          top: `${endPosition + (startPosition - endPosition) / 2}%`,
          // @ts-ignore
          ...(timelineEvent.props.startDate !== timelineEvent.props.endDate && {
            clip: "rect(0px 300px 10px 20px)",
          }),
          left: "50%",
          transform: `translateY(-50%) scaleX(${
            alternating && index % 2 === 1 ? -1 : 1
          })`,
        }}
      ></div>
      <div
        className={`${Styles.childItemContainer} ${
          !alternating || index % 2 === 0 ? Styles.toRight : Styles.toLeft
        }`}
        style={{
          top: `calc(${
            startPosition + (endPosition - startPosition) / 2
          }% - 20px)`,
        }}
      >
        {timelineEvent}
        <div
          className={Styles.iconContainer}
          style={{
            ...(!alternating || index % 2 === 0
              ? { left: "0", transform: "translate(-50%, -50%)" }
              : { right: "0", transform: "translate(50%, -50%)" }),
          }}
        >
          {
            // @ts-ignore
            timelineEvent.props.icon
          }
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({
  children,
  orientation = "vertical",
  linePosition = "middle",
  alternating = true,
  containerClassName,
}) => {
  let childArr = React.Children.toArray(children);
  // @ts-ignore
  childArr = childArr.sort((a, b) => {
    // @ts-ignore
    const paramA = Date.parse(a.props.startDate) as number;
    // @ts-ignore
    const paramB = Date.parse(b.props.startDate) as number;

    return paramA - paramB;
  });

  // @ts-ignore
  const timelineStartDate: number = Date.parse(childArr[0].props.startDate);
  const timelineEndDate: number = Date.now();

  return (
    <div className={`${Styles.timelineContainer} ${containerClassName}`}>
      <div className={Styles.timeline}>
        <div
          className={`${Styles.timelineLine} ${Styles[orientation]} ${Styles[linePosition]}`}
        ></div>
        <div className={Styles.presentDot}></div>
        <span className={Styles.present}>Present</span>
        {childArr.map((child, index) => (
          <SubTimeline
            timelineEvent={child}
            timelineStartDate={timelineStartDate}
            timelineEndDate={timelineEndDate}
            alternating={alternating}
            orientation={orientation}
            linePosition={linePosition}
            index={index}
            key={Math.random().toString()}
          />
        ))}
      </div>
    </div>
  );
};

export { Timeline, TimelineEvent };
