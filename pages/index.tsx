import { useState } from 'react';
import Dialog from '@/components/Dialog';
import Timer from '@/components/Timer';

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <main>
      <button onClick={() => setIsDialogOpen(true)}>Open Dialog</button>
      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        {step === 1 && <p>this is popup step 1</p>}
        {step === 2 && <Timer start={step === 2} reset={step !== 2} />}
        {step === 3 && <p>The assignment is complete!</p>}
        <button onClick={() => setStep(prev => prev - 1)} disabled={step === 1}>
          prev
        </button>
        <button onClick={() => setStep(prev => prev + 1)} disabled={step === 3}>
          next
        </button>
      </Dialog>
    </main>
  );
}
