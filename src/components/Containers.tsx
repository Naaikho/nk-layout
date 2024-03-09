import React, { useContext } from 'react';
import {
  NkContainerProps,
  NkSplitContainerProps,
} from '../types/Containers.style';
import {
  NkContainerStyle,
  NkSplitColumn,
  NkSplitContainerStyle,
} from '../styles/Containers.style';

/**
 * ### NkContainer
 *
 * Large container for page
 *
 * **Default settings:**
 * ```css
 * { width: 100%; padding: 0; }
 * ```
 */
export const NkContainer = (props: NkContainerProps) => {
  return (
    <NkContainerStyle
      $flex={props.flex}
      $gap={props.gap}
      $acenter={props.acenter}
      $jcenter={props.jcenter}
      $column={props.column}
      $around={props.around}
      $between={props.between}
      $evenly={props.evenly}
      $wrap={props.wrap}
      $center={props.center}
      $fullFill={props.fullFill}
      $fullFillFix={props.fullFillFix}
      $mBottom={props.mBottom}
      $mLeft={props.mLeft}
      $mRight={props.mRight}
      $mTop={props.mTop}
      $margin={props.margin}
      $marginH={props.marginH}
      $marginV={props.marginV}
      $maxWidth={props.maxWidth}
      $pBottom={props.pBottom}
      $pLeft={props.pLeft}
      $pRight={props.pRight}
      $pTop={props.pTop}
      $padding={props.padding}
      $paddingH={props.paddingH}
      $paddingV={props.paddingV}
      $stretch={props.stretch}
      $scroll={props.scroll}
      $overflow={props.overflow}
      className={props.className}
      onWheel={props.onWheel}
      onWheelCapture={props.onWheelCapture}
      onClick={props.onClick}
      ref={props.ref}
    >
      {props.children}
    </NkContainerStyle>
  );
};

/**
 * ### NkSplitContainer
 *
 * Split container into 2 `NkSplitColumn` *(just use `NkSplitColumn` as children like a container)*.
 *
 * You can edit style of left column.
 */
export const NkSplitContainer = (props: NkSplitContainerProps) => {
  return (
    <NkSplitContainerStyle
      $leftSize={props.leftSideOptions?.size}
      $open={props.leftSideOptions?.open}
      className={`${props.className}`}
    >
      <NkSplitColumn
        className={`${props.leftSideOptions?.backgroundColor} ${props.leftSideOptions?.border}`}
      >
        {props.navBar}
      </NkSplitColumn>
      <NkSplitColumn>{props.children}</NkSplitColumn>
    </NkSplitContainerStyle>
  );
};
