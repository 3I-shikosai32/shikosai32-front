import type { FC } from 'react';
import { useCallback, useRef, forwardRef } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { mergeRefs } from 'react-merge-refs';
import { Button, ButtonIcon } from '@/presentation/common/component/button/button.component';
import { Input, InputOverlay, InputProps } from '@/presentation/common/component/input/input.presenter';
import { Separator } from '@/presentation/common/component/sepatator/separator.presenter';
import twMerge from '@/presentation/style/twmerge';

export type PointInputProps = Omit<InputProps, 'type'>;
export const PointInput: FC<PointInputProps> = forwardRef<HTMLInputElement, PointInputProps>(({ className, ...props }, ref) => {
  const localRef = useRef<HTMLInputElement>(null);
  const incrementHandler = useCallback(() => {
    if (localRef.current) {
      localRef.current.stepUp();
    }
  }, [localRef]);
  const decrementHandler = useCallback(() => {
    if (localRef.current) {
      localRef.current.stepDown();
    }
  }, [localRef]);
  return (
    <div className="flex w-fit flex-row items-center justify-center gap-2">
      <InputOverlay>
        <Input type="number" ref={mergeRefs([localRef, ref])} className={twMerge('w-24', className)} {...props} />
      </InputOverlay>
      <Separator orientation="vertical" />
      <Button outlined circle aria-label="減らす" onClick={decrementHandler}>
        <ButtonIcon>
          <AiOutlineMinus />
        </ButtonIcon>
      </Button>
      <Button outlined circle aria-label="増やす" onClick={incrementHandler}>
        <ButtonIcon>
          <AiOutlinePlus />
        </ButtonIcon>
      </Button>
    </div>
  );
});
PointInput.displayName = 'PointInput';
