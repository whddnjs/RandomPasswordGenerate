import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DefaultLayout from './DefaultLayout';
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
import { addArr } from '../store/valueArrSlice';
import {
  numberValue,
  lowerCaseValue,
  upperCaseValue,
  symbolValue,
  similarValue,
} from '../Value';

export default function Generator() {
  const option = useSelector(state => state.option);
  const valueArr = useSelector(state => state.valueArr);
  const dispatch = useDispatch();

  const pwLengthArr = [];
  for (let i = 8; i <= 128; i++) {
    pwLengthArr.push(i);
  }

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

  return (
    <DefaultLayout>
      <div className="w-[40rem] h-[30rem] bg-white p-6">
        {/* header */}
        <div className="pb-6 border-b">
          <div className="text-2xl">비밀번호 생성기</div>
        </div>
        {/* password option */}
        <div className="px-2 py-4">
          {/* 비밀번호 길이 옵션 */}
          <div className="flex mb-1">
            <div className="w-60">비밀번호 길이:</div>
            <select className="border" name="length" onChange={onChangeLength}>
              {pwLengthArr.map(num => {
                return (
                  <option value={num} key={num}>
                    {num}
                  </option>
                );
              })}
              <option value="256">256</option>
              <option value="512">512</option>
              <option value="768">768</option>
              <option value="1024">1024</option>
            </select>
          </div>
          {/* 특수문자 포함 옵션 */}
          <div className="flex mb-1">
            <div className="w-60">특수문자 포함 여부:</div>
            <div>
              <input type="checkbox" name="symbol" onChange={onChangeSymbol} />
              <span>(e.g. @#$%)</span>
            </div>
          </div>
          {/* 슷자 포함 옵션 */}
          <div className="flex mb-1">
            <div className="w-60">숫자 포함 여부:</div>
            <div>
              <input type="checkbox" name="number" onChange={onChangeNumber} />
              <span>(e.g. 123456)</span>
            </div>
          </div>
          {/* 소문자 영어 포함 옵션 */}
          <div className="flex mb-1">
            <div className="w-60">소문자 영어 포함 여부:</div>
            <div>
              <input type="checkbox" name="lower" onChange={onChangeLower} />
              <span>(e.g. abcdefgh)</span>
            </div>
          </div>
          {/* 대문자 영어 포함 옵션 */}
          <div className="flex mb-1">
            <div className="w-60">대문자 영어 포함 여부:</div>
            <div>
              <input type="checkbox" name="upper" onChange={onChangeUpper} />
              <span>(e.g. ABCDEFGH)</span>
            </div>
          </div>
          {/* 유사문자 제외 옵션 */}
          <div className="flex mb-1">
            <div className="w-60">유사한 문자 제외 여부:</div>
            <div>
              <input
                type="checkbox"
                name="similar"
                onChange={onChangeSimilar}
              />
              <span>(e.g. i,I,l,L,1,o,O,0)</span>
            </div>
          </div>
          {/* 제외할 단어 옵션 */}
          <div className="flex mb-1">
            <div className="w-60">제외할 단어 입력:</div>
            <input
              type="text"
              className="border"
              name="exclude"
              onChange={onChangeExclude}
            />
          </div>
          {/* 포함할 단어 옵션 */}
          <div className="flex mb-1">
            <div className="w-60">포함할 단어 입력:</div>
            <input
              type="text"
              className="border"
              name="include"
              onChange={onChangeInclude}
            />
          </div>
          {/* 비밀번호 생성 버튼 */}
          <div className="mb-2">
            <button type="button" className="px-1 border ml-60">
              비밀번호 생성
            </button>
            {/* <button className="px-1 ml-1 border">옵션 초기화</button> */}
          </div>
          {/* 비밀번호 생성 되는곳 */}
          <div className="flex mb-2">
            <div className="w-60">생성된 비밀번호</div>
            <div className="flex">
              <div className="border min-w-[16rem]">비밀번호</div>
              <button className="px-2 ml-2 border">복사</button>
            </div>
          </div>
          {/* 이전 비밀번호 */}
          <div className="flex">
            <div className="w-60">이전에 생성된 비밀번호</div>
            <div>이전 비밀번호</div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
