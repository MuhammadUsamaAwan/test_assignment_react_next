import { useEffect, useState } from 'react';

interface Props {
  start: boolean;
  reset: boolean;
}

export default function Timer({ start, reset }: Props) {
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    if (start) setStartTime(new Date().getTime());
  }, [start]);

  useEffect(() => {
    if (reset) setCountDown(0);
  }, [reset]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(new Date().getTime() - startTime);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>{`${Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${Math.floor((countDown % (1000 * 60)) / 1000).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}`}</div>
  );
}
