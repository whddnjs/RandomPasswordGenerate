import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeLength,
  changeSymbol,
  changeNumber,
  changeLower,
  changeUpper,
  changeSimilar,
  changeExclude,
  changeInclude,
} from '../store/optionSlice';
import { addPassword } from '../store/passwordSlice';
import { getBetween8To128Numbers, getMixArray } from '../utils/arrayFactory';

export function useGeneratorPage() {
  const option = useSelector(state => state.option);

  const password = useSelector(state => state.password);

  const dispatch = useDispatch();

  const copyRef = useRef();

  const onChangeLength = e => {
    dispatch(changeLength(e.target.value));
  };
  const onChangeSymbol = e => {
    dispatch(changeSymbol(e.target.checked));
  };
  const onChangeNumber = e => {
    dispatch(changeNumber(e.target.checked));
  };
  const onChangeLower = e => {
    dispatch(changeLower(e.target.checked));
  };
  const onChangeUpper = e => {
    dispatch(changeUpper(e.target.checked));
  };
  const onChangeSimilar = e => {
    dispatch(changeSimilar(e.target.checked));
  };
  const onChangeExclude = e => {
    dispatch(changeExclude(e.target.value));
  };
  const onChangeInclude = e => {
    dispatch(changeInclude(e.target.value));
  };

  const onGeneratePassword = () => {
    if (!option.symbol && !option.number && !option.lower && !option.upper) {
      alert('비밀번호에 포함할 요소를 선택해주세요');
      return;
    }

    if (
      option.exclude === option.include &&
      option.exclude !== '' &&
      option.include !== ''
    ) {
      alert('포함할 단어와 제외할 단어가 같습니다.');
      return;
    }

    const values = getMixArray(option);

    while (true) {
      const password = [];
      for (let i = 0; i < option.length; i++) {
        const random = Math.floor(Math.random() * values.length);
        password.push(values[random]);
      }

      if (option.exclude.length > 0) {
        if (password.join('').includes(option.exclude)) {
          continue;
        }
      }

      if (option.include.length > 0) {
        if (password.join('').includes(option.include)) {
          dispatch(addPassword(password.join('')));
          return;
        } else {
          continue;
        }
      } else {
        dispatch(addPassword(password.join('')));
        return;
      }
    }
  };

  const onCopyPassword = () => {
    copyRef.current.focus();
    copyRef.current.select();

    navigator.clipboard.writeText(copyRef.current.value).then(() => {
      alert('복사완료');
    });
  };

  return {
    password,
    getBetween8To128Numbers,
    copyRef,
    onChangeLength,
    onChangeExclude,
    onChangeInclude,
    onChangeLower,
    onChangeNumber,
    onChangeSimilar,
    onChangeSymbol,
    onChangeUpper,
    onCopyPassword,
    onGeneratePassword,
  };
}
