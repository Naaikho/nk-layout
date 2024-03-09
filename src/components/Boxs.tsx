import React from 'react';
import { NkBoxProps } from '../types/Boxs.types';
import { NkBoxStyle } from '../styles/Boxs.style';

/**
 * ### NkBox
 *
 * A simple div box with padding, margin and flexbox.
 * ```
 */
export const NkBox = (props: NkBoxProps) => {
  return (
    <NkBoxStyle
      $flex={props.flex}
      $gap={props.gap}
      $acenter={props.acenter}
      $aend={props.aend}
      $jcenter={props.jcenter}
      $jend={props.jend}
      $column={props.column}
      $around={props.around}
      $between={props.between}
      $evenly={props.evenly}
      $wrap={props.wrap}
      $center={props.center}
      $fill={props.fill}
      $fullFill={props.fullFill}
      $mBottom={props.mBottom}
      $mLeft={props.mLeft}
      $mRight={props.mRight}
      $mTop={props.mTop}
      $margin={props.margin}
      $marginH={props.marginH}
      $marginV={props.marginV}
      $pBottom={props.pBottom}
      $pLeft={props.pLeft}
      $pRight={props.pRight}
      $pTop={props.pTop}
      $padding={props.padding}
      $paddingH={props.paddingH}
      $paddingV={props.paddingV}
      $stretch={props.stretch}
      $position={props.position}
      $transform={props.transform}
      $width={props.width}
      $height={props.height}
      $minWidth={props.minWidth}
      $minHeight={props.minHeight}
      $maxWidth={props.maxWidth}
      $maxHeight={props.maxHeight}
      $shrink={props.shrink}
      $grow={props.grow}
      $noHighlight={props.noHighlight}
      $noSelect={props.noSelect}
      className={props.className}
    >
      {props.children}
    </NkBoxStyle>
  );
};
