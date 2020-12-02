import React from 'react';
import CustomScrollbars, {
  ScrollbarProps,
} from 'react-custom-scrollbars';

type TState = {
  scrollMounted: boolean;
};

type TProps = {
  scrollTop?: number;
  scrollLeft?: number;
} & ScrollbarProps;

class Scrollbars extends React.Component<TProps, TState> {
  scrollbarsRef: React.Ref<CustomScrollbars>;

  constructor(props: TProps) {
    super(props);

    this.scrollbarsRef = React.createRef();

    this.onScroll = this.onScroll.bind(this);
    this.setCurrentScroll = this.setCurrentScroll.bind(this);
    this.interactWithScrollbar = this.interactWithScrollbar.bind(
      this,
    );
  }

  componentDidMount() {
    this.setCurrentScroll();
  }

  componentDidUpdate(prevProps: Readonly<TProps>) {
    if (
      prevProps.scrollTop !== this.props.scrollTop ||
      prevProps.scrollLeft !== this.props.scrollLeft
    ) {
      this.setCurrentScroll();
    }
  }

  setCurrentScroll() {
    const { scrollTop, scrollLeft } = this.props;

    if (
      typeof scrollTop !== 'number' &&
      typeof scrollLeft !== 'number'
    ) {
      return;
    }

    const safeScrollTop = scrollTop || 0;
    const safeScrollLeft = scrollLeft || 0;

    this.interactWithScrollbar((scrollbar) => {
      scrollbar.scrollTop(safeScrollTop);
      scrollbar.scrollLeft(safeScrollLeft);
    });
  }

  onScroll(e: React.UIEvent<any, UIEvent>) {
    const { scrollTop, scrollLeft, onScroll } = this.props;
    if (
      typeof scrollTop === 'number' ||
      typeof scrollLeft === 'number'
    ) {
      e.preventDefault();
    }

    onScroll && onScroll(e);
  }

  interactWithScrollbar(
    interact: (scrollbars: CustomScrollbars) => void,
  ) {
    const ref = this.scrollbarsRef as React.RefObject<
      CustomScrollbars
    >;
    if (ref && ref.current) {
      interact(ref.current);
    }
  }

  render() {
    const { scrollLeft, scrollTop, ...restProps } = this.props;

    return (
      <CustomScrollbars
        {...restProps}
        onScroll={this.onScroll}
        ref={this.scrollbarsRef}
      >
        {this.props.children}
      </CustomScrollbars>
    );
  }
}

export default Scrollbars;
