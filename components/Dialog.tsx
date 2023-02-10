import { ReactNode, useEffect, useRef } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Dialog({ isOpen, onClose, children }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) ref.current?.showModal();
    else ref.current?.close();
  }, [isOpen]);

  return (
    <dialog ref={ref} onClose={onClose} style={{ maxWidth: '50vw' }}>
      <button onClick={onClose}>Close</button>
      {children}
    </dialog>
  );
}
