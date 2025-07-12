import { useState, useEffect } from 'react';

export function useApi(apiFunc, ...params) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof apiFunc !== 'function') {
      console.error('❌ useApi: Expected a function but got', apiFunc);
      setError(new Error('Invalid API function'));
      setLoading(false);
      return;
    }

    let isMounted = true;

    apiFunc(...params)
      .then((res) => {
        if (isMounted) {
          setData(res);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [apiFunc, ...params]);

  return { data, error, loading };
}
