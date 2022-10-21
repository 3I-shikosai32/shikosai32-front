import type { FC } from 'react';
import { useCallback, useMemo } from 'react';
import {
  GamePlayground,
  GamePlaygroundTitle,
  GamePlaygroundDescription,
  GamePlaygroundDifficultyIndicator,
  GamePlaygroundSeparator,
} from './component/game-playground/game-playground.presenter';
import type { GamePlaygroundProps } from './component/game-playground/game-playground.presenter';
import { Game } from '@/model/game/game.model';

import { useRealtimeDetailedGameAttendersUseCase } from '@/use-case/game/use-realtime-detailed-game-attenders.use-case';
import { useCheckUserExistanceUseCase } from '@/use-case/user/use-check-user-existance.use-case';
import { useCurrentUserIdUseCase } from '@/use-case/user/use-current-user-id.use-case';
import { useExitGameUseCase } from '@/use-case/user/use-exit-game.use-case';
import { useJoinGameUseCase } from '@/use-case/user/use-join-game.use-case';

type UseGamePageResult = Pick<GamePlaygroundProps, 'attenders' | 'isAttending' | 'disabled' | 'onAttendanceChange'>;

const useGamePage = (game: Game): UseGamePageResult => {
  const { attenders } = useRealtimeDetailedGameAttendersUseCase({ game });
  const currentUser = useCurrentUserIdUseCase();
  const doesUserExist = useCheckUserExistanceUseCase({ id: currentUser?.id });
  const { joinGame } = useJoinGameUseCase();
  const { exitGame } = useExitGameUseCase();
  const onAttendanceChangeHandler = useCallback<GamePlaygroundProps['onAttendanceChange']>(
    (isUserAttending) => {
      // 新しい参加状態を受け取る
      if (doesUserExist && currentUser !== null) {
        if (isUserAttending) {
          joinGame({ user: { id: currentUser.id }, game });
        } else {
          exitGame({ user: { id: currentUser.id } });
        }
      }
    },
    [joinGame, exitGame, doesUserExist, currentUser, game],
  );
  const isCurrentUserAttending = useMemo((): boolean => {
    if (currentUser === null || !doesUserExist) {
      return false;
    }
    return attenders.some((attender) => attender.id === currentUser.id);
  }, [attenders, currentUser, doesUserExist]);
  return {
    attenders,
    isAttending: isCurrentUserAttending,
    disabled: !doesUserExist,
    onAttendanceChange: onAttendanceChangeHandler,
  };
};

export const CoinDroppingGamePage: FC = () => {
  const props = useGamePage(Game.CoinDropping);
  return (
    <GamePlayground {...props} className="w-screen grow text-game-coindrop-g2 gradient-game-coindrop">
      <GamePlaygroundTitle>水中コイン落とし</GamePlaygroundTitle>
      <GamePlaygroundDifficultyIndicator difficulty={1} />
      <GamePlaygroundDescription>
        水槽の中に沈んでいるグラスに向かって1円玉を5枚落とし、
        <br />
        入った枚数が最も多い人の勝ち！
      </GamePlaygroundDescription>
    </GamePlayground>
  );
};

export const XenoGamePage: FC = () => {
  const props = useGamePage(Game.Xeno);
  return (
    <GamePlayground {...props} className="w-screen grow text-game-xeno-g1 gradient-game-xeno">
      <GamePlaygroundTitle className="font-pixel-latin">Xeno</GamePlaygroundTitle>
      <GamePlaygroundDifficultyIndicator difficulty={5} />
      {/* <GamePlaygroundDescription>ここにゲームの簡潔な説明を挿入</GamePlaygroundDescription> */}
      <GamePlaygroundSeparator />
      <span>
        1人1枚ずつカードを持ち、自分のターン開始時に山札から 1枚引いてどちらかを捨てる。
        <br />
        自分以外を脱落させるか、山札が無くなった時に 他の人より大きい数字を持っていれば勝ち。
        <br />
      </span>

      <table className="mt-4 border-separate border-spacing-y-2 border-spacing-x-1 border border-transparent text-center">
        <thead>
          <tr>
            <th>-</th>
            <th className="w-1/4">名前</th>
            <th>効果</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              少年:
              <wbr /> 革命
            </td>
            <td className="text-start">
              1枚目は何も起こらない。2枚目は<b>皇帝</b>と同じ効果だが、<b>英雄</b>を処刑しても相手は脱落しない。
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>兵士: 捜査</td>
            <td className="text-start">
              相手のカードを当てれば勝利。ただし<b>英雄</b>だった場合、転生して続行。捜査というより暗殺。
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>占師: 透視</td>
            <td className="text-start">相手の手札を見ることができる。</td>
          </tr>
          <tr>
            <th>4</th>
            <td>乙女: 守護</td>
            <td className="text-start">次の相手の手番に、自分へのカード効果を全て無効化。</td>
          </tr>
          <tr>
            <th>5</th>
            <td>死神: 疫病</td>
            <td className="text-start">
              相手は山札から1枚引き、裏向きのまま指定された1枚を捨てる。<b>英雄</b>だった場合、もう1枚も捨て転生。
            </td>
          </tr>
          <tr>
            <th>6</th>
            <td>貴族: 対決</td>
            <td className="text-start">手札を見せ合い、数値の低い方が脱落。</td>
          </tr>
          <tr>
            <th>7</th>
            <td>賢者: 選択</td>
            <td className="text-start">次の自分の手番、3枚引いて好きな1枚を手札へ。残りは山札へ戻す。山札は相手がシャッフル。</td>
          </tr>
          <tr>
            <th>8</th>
            <td>精霊: 交換</td>
            <td className="text-start">相手と手札を交換。</td>
          </tr>
          <tr>
            <th>9</th>
            <td>皇帝: 公開処刑</td>
            <td className="text-start">
              相手は山札から1枚引き手札を公開。自分が指定した1枚を 捨てさせる。<b>英雄</b>だった場合、自分が勝利。
            </td>
          </tr>
          <tr>
            <th>10</th>
            <td>英雄: 潜伏・転生</td>
            <td className="text-start">
              一番数値が強いが場に出せない。つ以外で捨てさせられると、転生 <i>(=転生札を引く</i>。
            </td>
          </tr>
        </tbody>
      </table>
    </GamePlayground>
  );
};

export const IceRazeGamePage: FC = () => {
  const props = useGamePage(Game.IceRaze);
  return (
    <GamePlayground {...props} className="w-screen grow text-game-iceraze-g2 gradient-game-iceraze">
      <GamePlaygroundTitle className="font-pixel-latin">ICE RAZE</GamePlaygroundTitle>
      <GamePlaygroundDifficultyIndicator difficulty={2} />
      <GamePlaygroundDescription>
        ルーレットを回し、それに対応したアイスをハンマーで落とそう！ ペンギンを落としてしまった人の負け...
      </GamePlaygroundDescription>
    </GamePlayground>
  );
};

export const PokerGamePage: FC = () => {
  const props = useGamePage(Game.Poker);
  return (
    <GamePlayground {...props} className="w-screen grow text-game-poker-g1 gradient-game-poker">
      <GamePlaygroundTitle>ポーカー</GamePlaygroundTitle>
      <GamePlaygroundDifficultyIndicator difficulty={3} />
      <GamePlaygroundDescription>
        最初に1人5枚ずつ配られるトランプとカードチェンジを巧みに使って、より強い役を目指そう！
        <br />
        チェンジは2回まで。 カードの強い順は2、3、4 … Q、K、A
      </GamePlaygroundDescription>
    </GamePlayground>
  );
};

export const PresidentGamePage: FC = () => {
  const props = useGamePage(Game.President);
  return (
    <GamePlayground {...props} className="w-screen grow text-game-president-g2 gradient-game-president">
      <GamePlaygroundTitle>大富豪</GamePlaygroundTitle>
      <GamePlaygroundDifficultyIndicator difficulty={4} />
      <GamePlaygroundDescription>みんなおなじみの大富豪！</GamePlaygroundDescription>
      <GamePlaygroundSeparator />
      <span>
        強さの順は3、4、5 ... K、A、2、Joker。
        <br />
        ジョーカーは足りないカードの代わりにもなるぞ！
        <br />
        最初にカードを出すのはスペードの3を持っているプレイヤーだ。
        <br />
        順番に一人ずつ手札から選んでカードを出していこう。このとき、場に出ているカードよりも弱いカードは出せないぞ。
        <br />
        カードを最初に出した人が同じカードを2枚や3枚など複数で出した場合は次の人もそれより強いカードを同じ枚数で出さなくてはいけない...！
        <br />
        手持ちのカードを出せない時や、出したくない時はパスをすることができるぞ。
        <br />
        全員がパスをした場合は、場に出ているカードを流して、前の時に最後に出したプレイヤーが好きなカードを出して続行しよう。
        <br />
        最初に手札がなくなったプレイヤーの勝ちだ！
        <br />
      </span>
    </GamePlayground>
  );
};

export const WeDidntPlayTestGamePage: FC = () => {
  const props = useGamePage(Game.WeDidntPlaytest);
  return (
    <GamePlayground {...props} className="w-screen grow text-game-playtest-g2 gradient-game-playtest">
      <GamePlaygroundTitle>
        テストプレイなんて
        <br />
        してないよ
      </GamePlaygroundTitle>
      <GamePlaygroundDifficultyIndicator difficulty={3} />
      <GamePlaygroundDescription>
        最初に配られる2枚のカードと、自分の番が来るたびに山札から引くカードを使う遊び。
        <br />
        自分の番が来たら、手札の中から1枚選んでカードを使おう！
        <br />
        この時、使ったカードの効果がどんなものでも、必ず従わなければならない...
      </GamePlaygroundDescription>
    </GamePlayground>
  );
};
