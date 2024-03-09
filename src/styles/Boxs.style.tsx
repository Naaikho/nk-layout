"use client";

import { styled } from "styled-components";
import { NkBoxStyleProps } from "../types/Boxs.types";

export const NkBoxStyle = styled.div<NkBoxStyleProps>`
  ${(props) => (props.$fill ? `width: 100%;` : ``)}

  ${(props) => (props.$width ? `width: ${props.$width};` : ``)}
  ${(props) => (props.$height ? `height: ${props.$height};` : ``)}
  ${(props) => (props.$minWidth ? `min-width: ${props.$minWidth};` : ``)}
  ${(props) => (props.$minHeight ? `min-height: ${props.$minHeight};` : ``)}
  ${(props) => (props.$maxWidth ? `max-width: ${props.$maxWidth};` : ``)}
  ${(props) => (props.$maxHeight ? `max-height: ${props.$maxHeight};` : ``)}

  ${(props) => (props.$padding ? `padding: ${props.$padding}px;` : ``)}
  ${(props) => (props.$paddingH ? `padding-left: ${props.$paddingH}px; padding-right: ${props.$paddingH}px;` : ``)}
  ${(props) => (props.$paddingV ? `padding-top: ${props.$paddingV}px; padding-bottom: ${props.$paddingV}px;` : ``)}
  ${(props) => (props.$pTop ? `padding-top: ${props.$pTop}px;` : ``)}
  ${(props) => (props.$pBottom ? `padding-bottom: ${props.$pBottom}px;` : ``)}
  ${(props) => (props.$pLeft ? `padding-left: ${props.$pLeft}px;` : ``)}
  ${(props) => (props.$pRight ? `padding-right: ${props.$pRight}px;` : ``)}

  ${(props) => (props.$margin ? `margin: ${props.$margin}px;` : ``)}
  ${(props) => props.$marginV ? `margin-top: ${props.$marginV}px; margin-bottom: ${props.$marginV}px;` : ``}
  ${(props) => props.$marginH ? `margin-left: ${props.$marginH}px; margin-right: ${props.$marginH}px;` : ``}
  ${(props) => (props.$mTop ? `margin-top: ${props.$mTop}px;` : ``)}
  ${(props) => (props.$mBottom ? `margin-bottom: ${props.$mBottom}px;` : ``)}
  ${(props) => (props.$mLeft ? `margin-left: ${props.$mLeft}px;` : ``)}
  ${(props) => (props.$mRight ? `margin-right: ${props.$mRight}px;` : ``)}

  ${(props) => (props.$flex ? `display: flex;` : null)}
  ${(props) => props.$center ? `justify-content: center; align-items: center;` : null}
  ${(props) => (props.$jcenter ? `justify-content: center;` : null)}
  ${(props) => (props.$jend ? `justify-content: end;` : null)}
  ${(props) => (props.$acenter ? `align-items: center;` : null)}
  ${(props) => (props.$aend ? `align-items: end;` : null)}
  ${(props) => (props.$between ? `justify-content: space-between;` : null)}
  ${(props) => (props.$around ? `justify-content: space-around;` : null)}
  ${(props) => (props.$evenly ? `justify-content: space-evenly;` : null)}
  ${(props) => (props.$stretch ? `align-items: stretch;` : null)}
  ${(props) => (props.$column ? `flex-direction: column;` : null)}
  ${(props) => (props.$wrap ? `flex-wrap: wrap;` : null)}
  ${(props) => (props.$gap ? `gap: ${props.$gap}px;` : null)}
  ${(props) => (props.$grow ? `flex-grow: ${props.$grow};` : null)}
  ${(props) => (props.$shrink ? `flex-shrink: ${props.$shrink};` : null)}

  ${(props) => props.$fullFill ? `height: 100%;` : ``}

  ${(props) => props.$position ? `
    position: ${props.$position.type};
    ${props.$position.top ? `top: ${props.$position.top}${props.$position.unit || "px"};` : ``}
    ${props.$position.bottom ? `bottom: ${props.$position.bottom}${props.$position.unit || "px"};` : ``}
    ${props.$position.left ? `left: ${props.$position.left}${props.$position.unit || "px"};` : ``}
    ${props.$position.right ? `right: ${props.$position.right}${props.$position.unit || "px"};` : ``}
    ${props.$position.zIndex ? `z-index: ${props.$position.zIndex};` : ``}
  ` : ``}

  ${(props) => props.$transform ? `
    transform: 
      ${props.$transform.translateX ? `translateX(${props.$transform.translateX}${props.$transform.unit || "px"})` : ``}
      ${props.$transform.translateY ? `translateY(${props.$transform.translateY}${props.$transform.unit || "px"})` : ``}
      ${props.$transform.translateZ ? `translateZ(${props.$transform.translateZ}${props.$transform.unit || "px"})` : ``}
      ${props.$transform.rotateX ? `rotateX(${props.$transform.rotateX}deg)` : ``}
      ${props.$transform.rotateY ? `rotateY(${props.$transform.rotateY}deg)` : ``}
      ${props.$transform.rotateZ ? `rotateZ(${props.$transform.rotateZ}deg)` : ``}
      ${props.$transform.scaleX ? `scaleX(${props.$transform.scaleX})` : ``}
      ${props.$transform.scaleY ? `scaleY(${props.$transform.scaleY})` : ``}
      ${props.$transform.scaleZ ? `scaleZ(${props.$transform.scaleZ})` : ``}
    ;
  ` : ``}

	${(props) => props.$noHighlight ? `
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently
										supported by Chrome, Edge, Opera and Firefox */

		* {
			-webkit-touch-callout: none; /* iOS Safari */
			-webkit-user-select: none; /* Safari */
			-khtml-user-select: none; /* Konqueror HTML */
			-moz-user-select: none; /* Old versions of Firefox */
			-ms-user-select: none; /* Internet Explorer/Edge */
			user-select: none; /* Non-prefixed version, currently
										supported by Chrome, Edge, Opera and Firefox */
		}
	` : ``}

	${(props) => props.$noSelect ? `
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		pointer-events: none;

		* {
			-webkit-touch-callout: none;
			-webkit-user-select: none;
			-khtml-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			pointer-events: none;
		}
	` : ``}
`;