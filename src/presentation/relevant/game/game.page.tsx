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
      if (doesUserExist && currentUser !== null) {
        if (isUserAttending) {
          exitGame({ user: { id: currentUser.id } });
        } else {
          joinGame({ user: { id: currentUser.id }, game });
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
      <GamePlaygroundDescription>ここにゲームの簡潔な説明を挿入</GamePlaygroundDescription>
      <GamePlaygroundSeparator />
      <span className="text-xs">
        1人1枚ずつカードを持ち、自分のターン開始時に山札から 1枚引いてどちらかを捨てる。
        <br />
        自分以外を脱落させるか、山札が無くなった時に 他の人より大きい数字を持っていれば勝ち。
        <br />
        ・①少年：革命...(略
      </span>
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
      <span className="text-xs">
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
