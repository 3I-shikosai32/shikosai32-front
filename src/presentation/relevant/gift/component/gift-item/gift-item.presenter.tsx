import Image from 'next/image';
import { FC, ComponentPropsWithoutRef, useState } from 'react';
import { IoMdSwap } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import { useGiftItemAmount, DEFAULT_AMOUNT } from './hook/use-gift-item-amount.hook';
import type { Gift } from '@/model/gift/gift.model';
import type { User } from '@/model/user/user.model';
import { Button, ButtonIcon } from '@/presentation/primitive/component/button/button.presenter';
import {
  Modal,
  ModalTitle,
  ModalDescription,
  ModalOverlay,
  ModalContent,
  ModalButtonGroup,
} from '@/presentation/primitive/component/modal/modal.presenter';
import { Selector, SelectorItem, SelectorTrigger } from '@/presentation/primitive/component/selector/selector.presenter';
import twMerge from '@/presentation/style/twmerge';

export type GiftItemProps = ComponentPropsWithoutRef<'div'> &
  Partial<Pick<Gift, 'iconUrl'>> &
  Pick<Gift, 'id' | 'name' | 'price' | 'remaining'> & {
    isDummy?: boolean;
    isInteractive?: boolean;
    consumablePoint: User['points']['consumable'];
    onExchange:
      | (({ id, amount }: { id: GiftItemProps['id']; amount: number }) => Promise<void>)
      | (({ id, amount }: { id: GiftItemProps['id']; amount: number }) => void);
  };

export const GiftItem: FC<GiftItemProps> = ({
  isDummy,
  isInteractive,
  id,
  consumablePoint,
  name,
  iconUrl,
  price,
  remaining,
  onExchange,
  className,
  ...props
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedAmount, setSelectedAmount, selectableAmounts, isAffordable, isInStock, isAvailable, doesIndicateRemaining } = useGiftItemAmount({
    consumablePoint,
    price,
    remaining,
  });

  return (
    <div className={twMerge('flex flex-row max-w-sm gap-5 p-4 min-w-[20rem]', className)} {...props}>
      <figure className="flex aspect-square h-32 items-center justify-center rounded-full bg-gradient-to-b shadow-z16 gradient-exchange-itemframe">
        <div className="relative aspect-square h-3/4">
          {iconUrl && <Image src={iconUrl} objectFit="contain" width={256} height={256} alt={`景品:${name}の画像`} />}
        </div>
      </figure>
      <div className="flex flex-col items-start justify-center gap-2.5 font-branding">
        <h6 className={twMerge('text-lg', !isAvailable && !isDummy && isInteractive && 'line-through')}>{name}</h6>
        {!isDummy && (
          <div className="flex flex-row items-center justify-start gap-2.5">
            <span className="font-bold">{`${price} Pt`}</span>
            {isInteractive && (
              <>
                <span className="text-neutral-700">
                  <MdClose size="0.8rem" />
                </span>
                <Selector
                  defaultValue={String(DEFAULT_AMOUNT)}
                  value={String(selectedAmount)}
                  onValueChange={(value) => setSelectedAmount(Number(value))}
                  trigger={<SelectorTrigger className="min-w-fit p-0 shadow-none" placeholder="個数を選択" />}
                >
                  {selectableAmounts.map((amount) => (
                    <SelectorItem key={amount} value={String(amount)}>
                      {amount}個
                    </SelectorItem>
                  ))}
                </Selector>
              </>
            )}
          </div>
        )}
        {!isDummy && isInteractive && (
          <div className="flex flex-row items-center justify-start gap-6">
            <Modal
              open={isModalOpen}
              onOpenChange={(isOpen) => setIsModalOpen(isOpen)}
              trigger={
                <Button
                  disabled={!isAvailable}
                  className={twMerge(
                    'w-fit disabled:contrast-100 bg-gradient-to-br gradient-exchange',
                    !isAvailable && 'gradient-exchange-itemframe',
                  )}
                >
                  {!isInStock && (
                    <>
                      売り切れました
                      <br />
                    </>
                  )}
                  {!isAffordable && (
                    <>
                      ポイントが足りません
                      <br />
                    </>
                  )}
                  {isAvailable && (
                    <>
                      <ButtonIcon>
                        <IoMdSwap />
                      </ButtonIcon>
                      交換
                    </>
                  )}
                </Button>
              }
            >
              <ModalOverlay>
                <ModalContent>
                  <ModalTitle>本当に交換しますか？</ModalTitle>
                  <ModalDescription className="text-center">
                    <span className="font-bold">{name}</span> を <span className="font-bold">{selectedAmount}個</span>
                    <br />
                    合計 {price * selectedAmount} Pt で交換しますか？
                  </ModalDescription>
                  <ModalButtonGroup>
                    <Button
                      outlined
                      onClick={() => {
                        setIsModalOpen(false);
                      }}
                    >
                      キャンセル
                    </Button>
                    <Button
                      className="bg-exchange"
                      onClick={() => {
                        onExchange({
                          id,
                          amount: selectedAmount,
                        });
                        setIsModalOpen(false);
                      }}
                    >
                      交換する
                    </Button>
                  </ModalButtonGroup>
                </ModalContent>
              </ModalOverlay>
            </Modal>
            {doesIndicateRemaining && <span className="font-bold text-neutral-300">残り{remaining}個</span>}
          </div>
        )}
      </div>
    </div>
  );
};

GiftItem.defaultProps = {
  isDummy: false,
  isInteractive: true,
};
