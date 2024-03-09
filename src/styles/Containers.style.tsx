"use client";

import { styled } from "styled-components";
import { NkContainerStyleProps, NkSplitContainerStyleProps } from "../types/Containers.style";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  height: 100vh;
  height: 100dvh;
  overflow-y: auto;
  overflow-x: hidden;

  scroll-behavior: smooth;
  // remove scroll bar on safari
  -webkit-overflow-scrolling: touch;

  // remove scroll bar on all browsers
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NkContainerStyle = styled.div<NkContainerStyleProps>`
  width: 100%;
  padding: 0;
  position: relative;

  ${(props) => (props.$flex ? `display: flex;` : null)}
  ${(props) =>
    props.$center ? `justify-content: center; align-items: center;` : null}
  ${(props) => (props.$jcenter ? `justify-content: center;` : null)}
  ${(props) => (props.$acenter ? `align-items: center;` : null)}
  ${(props) => (props.$between ? `justify-content: space-between;` : null)}
  ${(props) => (props.$around ? `justify-content: space-around;` : null)}
  ${(props) => (props.$evenly ? `justify-content: space-evenly;` : null)}
  ${(props) => (props.$stretch ? `align-items: stretch;` : null)}
  ${(props) => (props.$column ? `flex-direction: column;` : null)}
  ${(props) => (props.$wrap ? `flex-wrap: wrap;` : null)}
  ${(props) => (props.$gap ? `gap: ${props.$gap}px;` : null)}

  ${(props) => props.$fullFill ? `
    min-height: 100vh;
    min-height: 100dvh;
  ` : ``}

  ${(props) => props.$fullFillFix ? `
    height: 100vh;
    height: 100dvh;
  ` : ``}

  ${(props) => (props.$padding ? `padding: ${props.$padding}px;` : ``)}
  ${(props) => props.$paddingH ? `padding-left: ${props.$paddingH}px; padding-right: ${props.$paddingH}px; `: ``}
  ${(props) => props.$paddingV ? `padding-top: ${props.$paddingV}px; padding-bottom: ${props.$paddingV}px; `: ``}
  ${(props) => (props.$pTop ? `padding-top: ${props.$pTop}px;` : ``)}
  ${(props) => (props.$pBottom ? `padding-bottom: ${props.$pBottom}px;` : ``)}
  ${(props) => (props.$pLeft ? `padding-left: ${props.$pLeft}px;` : ``)}
  ${(props) => (props.$pRight ? `padding-right: ${props.$pRight}px;` : ``)}

  ${(props) => props.$maxWidth ? `
    max-width: ${props.$maxWidth}px;
    margin: 0 auto;
  ` : ``}

	${(props) => (props.$margin ? `margin: ${props.$margin}px;` : ``)}
  ${(props) => props.$marginV ? `margin-top: ${props.$marginV}px; margin-bottom: ${props.$marginV}px; `: ``}
  ${(props) => props.$marginH ? `margin-left: ${props.$marginH}px; margin-right: ${props.$marginH}px; `: ``}
  ${(props) => (props.$mTop ? `margin-top: ${props.$mTop}px;` : ``)}
  ${(props) => (props.$mBottom ? `margin-bottom: ${props.$mBottom}px;` : ``)}
  ${(props) => (props.$mLeft ? `margin-left: ${props.$mLeft}px;` : ``)}
  ${(props) => (props.$mRight ? `margin-right: ${props.$mRight}px;` : ``)}

  ${(props) => props.$scroll ? `
    overflow-y: auto;
    overflow-x: hidden;

    // remove scroll bar on safari
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    // remove scroll bar on all browsers
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  ` : ``}

  ${(props) => props.$overflow ? `
    overflow: ${props.$overflow};
  ` : ``}
`;

/**
 * Used with `NkSplitContainer` as parent
 */
export const NkSplitColumn = styled.div`
  height: 100%;
`;

export const NkSplitContainerStyle = styled.div<NkSplitContainerStyleProps>`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  ${NkSplitColumn}:first-child {
    width: ${(props) => (props.$leftSize ? `${props.$leftSize}px` : "50%")};

		@media screen and (max-width: 768px) {
			position: fixed;
			top: 0;
			left: ${(props) => (props.$leftSize ? `-${Number(props.$leftSize) + 50}px` : "-350px")};
			width: 100%;
			max-width: ${(props) => (props.$leftSize ? `${props.$leftSize}px` : "300px")};
			transition: left 0.3s;
			z-index: 1000;
			backdrop-filter: blur(8px);
			-webkit-backdrop-filter: blur(8px);

			${props => props.$open ? `
				left: 0;
			` : ``}
		}
  }

  ${NkSplitColumn}:last-child {
    width: calc(100% - ${(props) => props.$leftSize || 0}px);
  }
`;