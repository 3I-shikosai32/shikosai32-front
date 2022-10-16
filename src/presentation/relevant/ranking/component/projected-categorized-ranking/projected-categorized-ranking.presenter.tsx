import { AnimatePresence } from 'framer-motion';
import type { FC, ReactElement } from 'react';
import { useState, useCallback, useEffect } from 'react';
import { RankedUserProjectedList } from '../ranked-user-projected-list/ranked-user-projected-list.presenter';
import { CharacterIconUrlDictionary, Character, CharacterNameDictionary } from '@/model/character/character.model';
import type { RankingCategory } from '@/model/ranking/ranking-category.model';
import type { RankingData } from '@/model/ranking/ranking-data.model';
import type { RankingPeriod } from '@/model/ranking/ranking-period.model';
import { Button } from '@/presentation/primitive/component/button/button.presenter';
import type { MotionCardProps } from '@/presentation/primitive/component/card/card.presenter';
import { Icon } from '@/presentation/primitive/component/icon/icon.presenter';
import { Selector, SelectorGroup, SelectorItem, SelectorSeparator } from '@/presentation/primitive/component/selector/selector.presenter';
import type { SelectorItemProps } from '@/presentation/primitive/component/selector/selector.presenter';
import twMerge from '@/presentation/style/twmerge';

const characterSelectorItemFactory = (
  character: Character,
): ReactElement<
  Omit<SelectorItemProps, 'value'> & {
    value: RankingCategory;
  }
> => (
  <SelectorItem value={character}>
    <Icon src={CharacterIconUrlDictionary[character]} alt={`${CharacterNameDictionary[character]}の画像`} className="h-6" />
    <span className="font-bold">{CharacterNameDictionary[character]} 部門</span>
  </SelectorItem>
);

const RankingCategorySelectorItemDictionary: Record<
  RankingCategory,
  ReactElement<
    Omit<SelectorItemProps, 'value'> & {
      value: RankingCategory;
    }
  >
> = {
  TOTAL: <SelectorItem value="TOTAL">キャラクターなんでも部門</SelectorItem>,
  FOX: characterSelectorItemFactory(Character.Fox),
  TREE: characterSelectorItemFactory(Character.Tree),
  REAPER: characterSelectorItemFactory(Character.Reaper),
  PUDDING: characterSelectorItemFactory(Character.Pudding),
  GOKU: characterSelectorItemFactory(Character.Goku),
  CAT: characterSelectorItemFactory(Character.Cat),
};

export type ProjectedCategorizedRankingProps = MotionCardProps & {
  categories: RankingData[RankingPeriod];
  switchInterval?: number; // ミリ秒単位
};

export const ProjectedCategorizedRanking: FC<ProjectedCategorizedRankingProps> = ({ switchInterval, children, className, categories, ...props }) => {
  const [currentCategory, setCurrentCategory] = useState<RankingCategory>('TOTAL');
  const [shouldAutoSlide, setShouldAutoSlide] = useState<boolean>(true);

  const setNextCurrentCategory = useCallback(() => {
    const currentCategoryIndex = Object.keys(RankingCategorySelectorItemDictionary).indexOf(currentCategory);
    const nextCategoryIndex = (currentCategoryIndex + 1) % Object.keys(RankingCategorySelectorItemDictionary).length;
    const nextCategory = Object.keys(RankingCategorySelectorItemDictionary)[nextCategoryIndex] as RankingCategory;
    setCurrentCategory(nextCategory);
  }, [currentCategory, setCurrentCategory]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (shouldAutoSlide) {
        setNextCurrentCategory();
      }
    }, switchInterval);
    return () => clearInterval(interval);
  }, [shouldAutoSlide, setNextCurrentCategory, switchInterval]);

  return (
    <div className={twMerge('flex flex-col justify-start items-center gap-4', className)} {...props}>
      <Selector
        aria-label="ランキングのカテゴリー"
        value={currentCategory}
        onValueChange={(category: RankingCategory) => {
          setShouldAutoSlide(false);
          setCurrentCategory(category);
        }}
      >
        <SelectorGroup label="全体">
          {Object.values(RankingCategorySelectorItemDictionary).filter((item) => item.props.value === 'TOTAL')}
        </SelectorGroup>
        <SelectorSeparator />
        <SelectorGroup label="使用キャラごと" className="gap-2">
          {Object.values(RankingCategorySelectorItemDictionary).filter((item) => item.props.value !== 'TOTAL')}
        </SelectorGroup>
      </Selector>
      {children}
      <AnimatePresence exitBeforeEnter>
        <RankedUserProjectedList
          key={currentCategory}
          layoutId="ranking-slideshow-dsjfhjsdkfhjks"
          className="h-96 self-stretch"
          users={categories[currentCategory]}
        />
      </AnimatePresence>
      <AnimatePresence>
        {!shouldAutoSlide && (
          <Button
            outlined
            transition={{ duration: 0.25 }}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.75 }}
            onClick={() => {
              setShouldAutoSlide(true);
            }}
          >
            自動でスライドさせる
          </Button>
        )}
      </AnimatePresence>
    </div>
  );
};

ProjectedCategorizedRanking.defaultProps = {
  switchInterval: 5000,
};
