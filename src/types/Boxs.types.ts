export interface NkBoxProps {
  /** Global padding of box in `px` */
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
  /** Global margin of box in `px` */
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
  /** Box width */
  width?: string;
  /** Box height */
  height?: string;
  /** Box min-width */
  minWidth?: string;
  /** Box min-height */
  minHeight?: string;
  /** Box max-width */
  maxWidth?: string;
  /** Box max-height */
  maxHeight?: string;

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
   * `justify-content: end`
   * ### (requires `flex`)
   */
  jend?: boolean;
  /**
   * `align-items: center`
   * ### (requires `flex`)
   */
  acenter?: boolean;
  /**
   * `align-items: end`
   * ### (requires `flex`)
   */
  aend?: boolean;
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
  /**
   * `flex-shrink: <number>`
   * ### (requires `flex`)
   */
  shrink?: number;
  /**
   * `flex-grow: <number>`
   * ### (requires `flex`)
   */
  grow?: number;
  /** Fill `width` */
  fill?: boolean;
  /** Fill `width` and `height` */
  fullFill?: boolean;
  /**
   * Change box position type
   */
  position?: {
    /** Position type */
    type: 'absolute' | 'relative' | 'fixed' | 'sticky';
    /** position unit */
    unit?: 'px' | '%';
    /** Top position in `unit` */
    top?: string | number;
    /** Bottom position in `unit` */
    bottom?: string | number;
    /** Left position in `unit` */
    left?: string | number;
    /** Right position in `unit` */
    right?: string | number;
    /** z-index */
    zIndex?: string | number;
  };
  /**
   * Change box transform
   */
  transform?: {
    /** Translate unit */
    unit?: 'px' | '%';
    /** transform translateX */
    translateX?: string | number;
    /** transform translateY */
    translateY?: string | number;
    /** transform translateZ */
    translateZ?: string | number;
    /** transform rotateX */
    rotateX?: string | number;
    /** transform rotateY */
    rotateY?: string | number;
    /** transform rotateZ */
    rotateZ?: string | number;
    /** transform scaleX */
    scaleX?: string | number;
    /** transform scaleY */
    scaleY?: string | number;
    /** transform scaleZ */
    scaleZ?: string | number;
  };

  /** Pointer event none */
  noHighlight?: boolean;
  /** Pointer avent none & user select none */
  noSelect?: boolean;

  children?: any;
  className?: string;
}

export interface NkBoxStyleProps {
  /** Global box padding in `px` */
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
  /** Global box margin in `px` */
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
  /** Box width */
  $width?: string;
  /** Box height */
  $height?: string;
  /** Box min-width */
  $minWidth?: string;
  /** Box min-height */
  $minHeight?: string;
  /** Box max-width */
  $maxWidth?: string;
  /** Box max-height */
  $maxHeight?: string;

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
   * `justify-content: end`
   * ### (requires `$flex`)
   */
  $jend?: boolean;
  /**
   * `align-items: center`
   * ### (requires `$flex`)
   */
  $acenter?: boolean;
  /**
   * `align-items: end`
   * ### (requires `$flex`)
   */
  $aend?: boolean;
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
  /**
   * `flex-shrink: <number>`
   * ### (requires `$flex`)
   */
  $shrink?: number;
  /**
   * `flex-grow: <number>`
   * ### (requires `$flex`)
   */
  $grow?: number;
  /** Fill `width` */
  $fill?: boolean;
  /** Fill `width` and `height` */
  $fullFill?: boolean;

  /**
   * Change box position type
   */
  $position?: {
    /** Position type */
    type: 'absolute' | 'relative' | 'fixed' | 'sticky';
    /** position unit */
    unit?: 'px' | '%';
    /** Top position in `unit` */
    top?: string | number;
    /** Bottom position in `unit` */
    bottom?: string | number;
    /** Left position in `unit` */
    left?: string | number;
    /** Right position in `unit` */
    right?: string | number;
    /** z-index */
    zIndex?: string | number;
  };
  /**
   * Change box transform
   */
  $transform?: {
    /** Translate unit */
    unit?: 'px' | '%';
    /** transform translateX */
    translateX?: string | number;
    /** transform translateY */
    translateY?: string | number;
    /** transform translateZ */
    translateZ?: string | number;
    /** transform rotateX */
    rotateX?: string | number;
    /** transform rotateY */
    rotateY?: string | number;
    /** transform rotateZ */
    rotateZ?: string | number;
    /** transform scaleX */
    scaleX?: string | number;
    /** transform scaleY */
    scaleY?: string | number;
    /** transform scaleZ */
    scaleZ?: string | number;
  };

  /** Pointer event none */
  $noHighlight?: boolean;
  /** Pointer avent none & user select none */
  $noSelect?: boolean;

  className?: string;
}
