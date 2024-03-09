export interface NkContainerProps {
  /** Active `flexbox` */
  flex?: boolean;
  /**
   * `justify-content: center` and `align-items: center`
   * ### (requires `flex`)
   */
  center?: boolean;
  /**
   * `justify-content: center`
   * ### (requires `flex`)
   */
  jcenter?: boolean;
  /**
   * `align-items: center`
   * ### (requires `flex`)
   */
  acenter?: boolean;
  /**
   * `justify-content: space-between`
   * ### (requires `flex`)
   */
  between?: boolean;
  /**
   * `justify-content: space-around`
   * ### (requires `flex`)
   */
  around?: boolean;
  /**
   * `justify-content: space-evenly`
   * ### (requires `flex`)
   */
  evenly?: boolean;
  /**
   * `align-items: stretch`
   * ### (requires `flex`)
   */
  stretch?: boolean;
  /**
   * `flex-direction: column`
   * ### (requires `flex`)
   */
  column?: boolean;
  /**
   * `flex-wrap: wrap`
   * ### (requires `flex`)
   */
  wrap?: boolean;
  /**
   * Gap between flexbox children in `px`
   * ### (requires `flex`)
   */
  gap?: string | number;
  /** Full fill `width` and `min-height` */
  fullFill?: boolean;
  /** Full fill `width` and `height` */
  fullFillFix?: boolean;
  /** Max width in `px` (active `margin: 0 auto`) */
  maxWidth?: string | number;
  /** Global container padding in `px` */
  padding?: string | number;
  /** Vertical padding in `px` */
  paddingV?: string | number;
  /** Horizontal padding in `px` */
  paddingH?: string | number;
  /** Top padding in `px` */
  pTop?: string | number;
  /** Bottom padding in `px` */
  pBottom?: string | number;
  /** Left padding in `px` */
  pLeft?: string | number;
  /** Right padding in `px` */
  pRight?: string | number;
  /** Global container margin in `px` */
  margin?: string | number;
  /** Vertical margin in `px` */
  marginV?: string | number;
  /** Horizontal margin in `px` */
  marginH?: string | number;
  /** Top margin in `px` */
  mTop?: string | number;
  /** Bottom margin in `px` */
  mBottom?: string | number;
  /** Left margin in `px` */
  mLeft?: string | number;
  /** Right margin in `px` */
  mRight?: string | number;
  /** if enable, the container get scroll overflow */
  scroll?: boolean;
  /** Define the overflow behavior on the container */
  overflow?: "auto" | "hidden" | "scroll" | "visible";
  onWheel?: React.WheelEventHandler<HTMLDivElement>;
  onWheelCapture?: React.WheelEventHandler<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  ref?: React.RefObject<HTMLDivElement>;
  children?: any;
  className?: string;
}

export interface NkSplitContainerProps {
  leftSideOptions?: {
    /** Left column size in `px` */
    size?: string | number;
    /** Left column have right border */
    border?: string;
    /** Left column background color */
    backgroundColor?: string;
    /** Manage `left` position if breakpoint `768` is reached */
    open?: boolean;
  };
  navBar?: any;
  children?: any;
  className?: string;
}

export interface NkContainerStyleProps {
  /** Active `flexbox` */
  $flex?: boolean;
  /**
   * `justify-content: center` and `align-items: center`
   * ### (requires `$flex`)
   */
  $center?: boolean;
  /**
   * `justify-content: center`
   * ### (requires `$flex`)
   */
  $jcenter?: boolean;
  /**
   * `align-items: center`
   * ### (requires `$flex`)
   */
  $acenter?: boolean;
  /**
   * `justify-content: space-between`
   * ### (requires `$flex`)
   */
  $between?: boolean;
  /**
   * `justify-content: space-around`
   * ### (requires `$flex`)
   */
  $around?: boolean;
  /**
   * `justify-content: space-evenly`
   * ### (requires `$flex`)
   */
  $evenly?: boolean;
  /**
   * `align-items: stretch`
   * ### (requires `$flex`)
   */
  $stretch?: boolean;
  /**
   * `flex-direction: column`
   * ### (requires `$flex`)
   */
  $column?: boolean;
  /**
   * `flex-wrap: wrap`
   * ### (requires `$flex`)
   */
  $wrap?: boolean;
  /**
   * Gap between flexbox children in `px`
   * ### (requires `$flex`)
   */
  $gap?: string | number;
  /** Full fill `width` and `min-height` */
  $fullFill?: boolean;
  /** Full fill `width` and `height` */
  $fullFillFix?: boolean;
  /** Max width in `px` (active `margin: 0 auto`) */
  $maxWidth?: string | number;
  /** Global container padding in `px` */
  $padding?: string | number;
  /** Vertical padding in `px` */
  $paddingV?: string | number;
  /** Horizontal padding in `px` */
  $paddingH?: string | number;
  /** Top padding in `px` */
  $pTop?: string | number;
  /** Bottom padding in `px` */
  $pBottom?: string | number;
  /** Left padding in `px` */
  $pLeft?: string | number;
  /** Right padding in `px` */
  $pRight?: string | number;
  /** Global container margin in `px` */
  $margin?: string | number;
  /** Vertical margin in `px` */
  $marginV?: string | number;
  /** Horizontal margin in `px` */
  $marginH?: string | number;
  /** Top margin in `px` */
  $mTop?: string | number;
  /** Bottom margin in `px` */
  $mBottom?: string | number;
  /** Left margin in `px` */
  $mLeft?: string | number;
  /** Right margin in `px` */
  $mRight?: string | number;
  /** if enable, the container get scroll overflow */
  $scroll?: boolean;
  /** Define the overflow behavior on the container */
  $overflow?: "auto" | "hidden" | "scroll" | "visible";
}

export interface NkSplitContainerStyleProps {
  /** Left column size in `px` */
  $leftSize?: string | number;
  /** Manage `left` position if breakpoint `768` is reached */
  $open?: boolean;
  className?: string;
}