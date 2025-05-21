'use client';
import { useState } from 'react';
import { cva } from 'class-variance-authority';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';

const rateButtonVariants = cva(
  'inline-flex items-center gap-2 px-3 py-2 cursor-pointer rounded-full font-medium border text-sm [&_svg]:size-4 disabled:cursor-not-allowed',
  {
    variants: {
      active: {
        true: 'bg-fd-accent text-fd-accent-foreground [&_svg]:fill-current',
        false: 'text-fd-muted-foreground',
      },
    },
  },
);

export function Rate() {
  const [opinion, setOpinion] = useState<'good' | 'bad' | null>(null);
  const [showThanks, setShowThanks] = useState(false);

  const handleClick = (value: 'good' | 'bad') => {
    if (opinion === value) {
      setOpinion(null);
      setShowThanks(false);
    } else {
      setOpinion(value);
      setShowThanks(true);
    }
  };

  return (
    <div className="border-y py-3">
      <div className="flex flex-row items-center gap-2">
        <p className="text-sm font-medium pe-2">How is this guide?</p>
        <button
          className={`${rateButtonVariants({
            active: opinion === 'good',
          })}`}
          onClick={() => handleClick('good')}
        >
          <RiThumbUpFill />
          Good
        </button>
        <button
          className={`${rateButtonVariants({
            active: opinion === 'bad',
          })}`}
          onClick={() => handleClick('bad')}
        >
          <RiThumbDownFill />
          Bad
        </button>
        {showThanks && (
          <span className="text-sm text-fd-muted-foreground ml-2">
            Thanks for your feedback!
          </span>
        )}
      </div>
    </div>
  );
}