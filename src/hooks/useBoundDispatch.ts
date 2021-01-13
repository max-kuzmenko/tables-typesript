import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useBoundDispatch = <TCreator extends (...a: any[]) => any>(
  actionCreator: TCreator,
) => {
  const dispatch = useDispatch();

  return useCallback(
    (...ags: ArgTypes<TCreator>): ReturnType<typeof dispatch> =>
      dispatch(actionCreator(...ags)),
    [],
  );
};

export default useBoundDispatch;
