import React, { useEffect, useRef } from 'react';

const wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

const scrollBlockingHandler = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
};

const addScrollListeners = (elem: HTMLDivElement) => {
  elem.addEventListener(
    'DOMMouseScroll',
    scrollBlockingHandler,
    false,
  );
  elem.addEventListener(wheelEvent, scrollBlockingHandler);
  elem.addEventListener('touchmove', scrollBlockingHandler);
  elem.addEventListener('keydown', scrollBlockingHandler, false);
  elem.addEventListener('scroll', scrollBlockingHandler, false);
};

const removeScrollListeners = (elem: HTMLDivElement) => {
  elem.removeEventListener(
    'DOMMouseScroll',
    scrollBlockingHandler,
    false,
  );
  elem.removeEventListener(wheelEvent, scrollBlockingHandler);
  elem.removeEventListener('touchmove', scrollBlockingHandler);
  elem.removeEventListener('keydown', scrollBlockingHandler, false);
  elem.removeEventListener('scroll', scrollBlockingHandler, false);
};

const RemoveScroll = (props: React.HTMLAttributes<any>) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef && divRef.current) {
      addScrollListeners(divRef.current);

      return () => {
        if (!divRef.current) return;
        removeScrollListeners(divRef.current);
      };
    }
  }, []);

  return <div ref={divRef} {...props} />;
};

export default RemoveScroll;
