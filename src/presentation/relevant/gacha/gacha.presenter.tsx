import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import type { FC } from 'react';

import { useState, useCallback } from 'react';
import type { Item } from '@/model/item/item.model';
import type { User } from '@/model/user/user.model';
import { Button } from '@/presentation/primitive/component/button/button.presenter';
import { LiveCharacter } from '@/presentation/primitive/component/live-character/live-character.presenter';
import type { LiveCharacterProps } from '@/presentation/primitive/component/live-character/live-character.presenter';
import { Modal, ModalTitle, ModalDescription, ModalOverlay, ModalContent } from '@/presentation/primitive/component/modal/modal.presenter';

export type GachaProps = Pick<User, 'name' | 'pullableGachaTimes'> & {
  images: LiveCharacterProps['images'];
  itemIconUrls: Array<Item['iconUrl']>;
  onGachaPulled: () => void;
  lootedItemIconUrl?: Item['iconUrl'];
};

export const Gacha: FC<GachaProps> = ({ name, pullableGachaTimes, images, itemIconUrls, onGachaPulled, lootedItemIconUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldShowAnimatedImage, setShouldShowAnimatedImage] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  // const [hasGachaPulled, setHasGachaPulled] = useState(false);

  const onGachaButtonClickHandler = useCallback(() => {
    setIsPulling(true);
    setShouldShowAnimatedImage(true);
    onGachaPulled();
    // setHasGachaPulled(true);
    setTimeout(() => {
      setIsPulling(false);
      setIsModalOpen(true);
    }, 4000);
  }, [setShouldShowAnimatedImage, onGachaPulled, setIsPulling]);

  const onModalOpenChangeHandler = useCallback(
    (isOpen: boolean) => {
      setIsModalOpen(isOpen);
      if (!isOpen) {
        setShouldShowAnimatedImage(false);
      }
    },
    [setShouldShowAnimatedImage, setIsModalOpen],
  );

  return (
    <div className="flex w-full flex-col items-center justify-center gap-0 overflow-hidden bg-gradient-to-b from-[#FEECFE] to-secondary-100/0 p-4 font-pixel ">
      <div className="grid w-full max-w-sm grid-cols-1 grid-rows-1">
        <div className="relative col-span-full row-span-full m-0 -mx-10 flex flex-row items-center justify-center p-0">
          {/* 768 x 1195 */}
          <Image src="/gacha/white_blank_keitai.png" width={768} height={1195} alt="ガチャの背景画像" />
        </div>
        <AnimatePresence>
          {shouldShowAnimatedImage && (
            <motion.div
              transition={{ duration: 0.1 }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              className="relative col-span-full row-span-full m-0 -mx-10 flex flex-row items-center justify-center p-0"
            >
              {/* 768 x 1195 */}
              <Image src="/gacha/animated_keitai.apng" width={768} height={1195} alt="ガチャの背景画像" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative col-span-full row-span-full m-0 flex flex-col items-center justify-start gap-4 p-0 pt-48">
          <AnimatePresence>
            {!isPulling && (
              <>
                <LiveCharacter images={images} name={name} />
                <ul className="flex flex-row items-center justify-center gap-2">
                  {itemIconUrls.map((iconUrl) => (
                    <motion.div
                      transition={{ duration: 0.25 }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{ opacity: 0, y: 30 }}
                      key={iconUrl}
                      className="relative flex aspect-square h-16 items-center justify-center rounded-base bg-gradient-to-b from-white to-primary-100 shadow-z4"
                    >
                      <figure className="relative aspect-square h-3/4">
                        <Image src={iconUrl} width={256} height={256} alt="きせかえアイテムの画像" />
                      </figure>
                    </motion.div>
                  ))}
                </ul>
              </>
            )}
          </AnimatePresence>
        </div>
        <div className="relative col-span-full row-span-full m-0 flex flex-col items-center justify-end p-0">
          <div className="mb-20 flex flex-row items-center justify-center gap-12">
            <div className="flex h-12 w-24 items-center justify-center rounded-base border-2 border-neutral-300 bg-neutral-900 p-4 text-center text-neutral-100 shadow-z4">
              残り{pullableGachaTimes}回
            </div>
            <Button
              outlined
              className="h-12 w-24 bg-neutral-100 p-4 font-pixel"
              disabled={isPulling || pullableGachaTimes < 1}
              onClick={onGachaButtonClickHandler}
            >
              ガチャを回す
            </Button>
          </div>
          <Modal open={isModalOpen} onOpenChange={onModalOpenChangeHandler}>
            <ModalOverlay>
              <ModalContent className="border-2 border-gold bg-gradient-to-b from-white to-[#feefd2] text-center">
                <ModalTitle className="font-pixel text-primary drop-shadow-md">ガチャの結果は...?</ModalTitle>
                {!!lootedItemIconUrl && (
                  <motion.div
                    transition={{ duration: 1.0, type: 'spring', stiffness: 150, damping: 5 }}
                    initial={{ opacity: 0, scale: 1.5, y: -50 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    className="relative flex aspect-square h-48 items-center justify-center rounded-base bg-white"
                  >
                    <figure className="relative aspect-square h-3/4">
                      <Image src={lootedItemIconUrl} width={256} height={256} alt="きせかえアイテムの画像" />
                    </figure>
                  </motion.div>
                )}
                <ModalDescription className="font-pixel">
                  手に入れたきせかえアイテムは
                  <br />
                  自動で装着されました！
                </ModalDescription>
                <Button outlined onClick={() => onModalOpenChangeHandler(false)}>
                  閉じる
                </Button>
              </ModalContent>
            </ModalOverlay>
          </Modal>
        </div>
      </div>
    </div>
  );
};

Gacha.defaultProps = {
  lootedItemIconUrl: undefined,
};
