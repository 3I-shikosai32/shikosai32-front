import { useReducer, useCallback, useState } from 'react';

//
// `<input>`の入力された値に基づく状態を表す`ValidityState`
// 参照: https://developer.mozilla.org/ja/docs/Web/API/ValidityState
//
export type InputValidityState = HTMLInputElement['validity'];

export const useInputValidityState = () => {
  const [validityState, setValidityState] = useState<InputValidityState>({
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valueMissing: false,
    valid: true,
  });
  //
  // `<input>`の入力値が`value`と`onChange`を使って管理されていない時(=`uncontrolled`な時)、入力値が更新されても再レンダリングされない。
  // しかし、`<input>`の状態に依って表示を変える下記の`<InputMessage>`と併用する場合、変更に合わせて再レンダリングする必要がある。
  // そのような場合のために、Reactでuncontrolledな`<input>`の入力値が更新されたときにコンポーネントを再レンダリングするための関数`forceUpdate`を提供する
  // 参照: https://ja.reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
  //
  const [, forceUpdate] = useReducer((x) => !x, false);
  const inputRef = useCallback(
    (inputNode: HTMLInputElement) => {
      if (inputNode) {
        setValidityState(inputNode.validity);
      }
    },
    [setValidityState],
  );
  return {
    inputRef,
    validityState,
    forceUpdate,
  };
};
