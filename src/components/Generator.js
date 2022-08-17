import React, { useState } from 'react';
import DefaultLayout from './DefaultLayout';
import {
  numberValue,
  lowerCaseValue,
  upperCaseValue,
  symbolValue,
  ambiguousValue,
} from '../Value';

export default function Generator() {
  const [option, setOption] = useState({
    length: 8,
    symbol: false,
    number: false,
    lower: false,
    upper: false,
    ambiguous: false,
    include: '',
    exclude: '',
  });

  const pwLengthArr = [];
  for (let i = 8; i <= 128; i++) {
    pwLengthArr.push(i);
  }

  console.log(option);
  console.log(numberValue);
  console.log(lowerCaseValue);
  console.log(upperCaseValue);
  console.log(symbolValue);
  console.log(ambiguousValue);

  const onSubmitHandler = e => {
    e.preventDefault();

    const formData = {
      length: e.target.length.value,
      symbol: e.target.symbol.checked,
      number: e.target.number.checked,
      lower: e.target.lower.checked,
      upper: e.target.upper.checked,
      ambiguous: e.target.ambiguous.checked,
      include: e.target.include.value,
      exclude: e.target.exclude.value,
    };

    setOption(() => {
      return { ...formData };
    });
  };

  return (
    <DefaultLayout>
      <div className="w-[40rem] h-[30rem] bg-white p-6">
        {/* header */}
        <div className="flex justify-around pb-6 border-b">
          <div className="text-2xl">Secure Password Generator</div>
          <select>
            <option value="english">English</option>
            <option value="korean">Korean</option>
          </select>
        </div>
        {/* password option */}
        <div className="px-2 py-4">
          <form onSubmit={onSubmitHandler}>
            {/* 비밀번호 길이 옵션 */}
            <div className="flex mb-1">
              <div className="w-64">Password Length:</div>
              <select className="border" name="length">
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
            {/* 심볼 추가 옵션 */}
            <div className="flex mb-1">
              <div className="w-64">Include Symbols:</div>
              <div>
                <input type="checkbox" name="symbol" />
                <span>(e.g. @#$%)</span>
              </div>
            </div>
            {/* 슷자 추가 옵션 */}
            <div className="flex mb-1">
              <div className="w-64">Include Numbers:</div>
              <div>
                <input type="checkbox" name="number" />
                <span>(e.g. 123456)</span>
              </div>
            </div>
            {/* 소문자 영어 추가 옵션 */}
            <div className="flex mb-1">
              <div className="w-64">Include Lowercase Characters:</div>
              <div>
                <input type="checkbox" name="lower" />
                <span>(e.g. abcdefgh)</span>
              </div>
            </div>
            {/* 대문자 영어 추가 옵션 */}
            <div className="flex mb-1">
              <div className="w-64">Include Uppercase Characters:</div>
              <div>
                <input type="checkbox" name="upper" />
                <span>(e.g. ABCDEFGH)</span>
              </div>
            </div>
            {/* 괄호 추가 옵션 */}
            <div className="flex mb-1">
              <div className="w-64">Exclude Ambiguous Characters:</div>
              <div>
                <input type="checkbox" name="ambiguous" />
                <span>({}[]()/\'"~,;:.)</span>
              </div>
            </div>
            {/* 제외할 단어 옵션 */}
            <div className="flex mb-1">
              <div className="w-64">Exclude String</div>
              <input type="text" className="border" name="exclude" />
            </div>
            {/* 포함할 단어 옵션 */}
            <div className="flex mb-1">
              <div className="w-64">Include String</div>
              <input type="text" className="border" name="include" />
            </div>
            {/* 비밀번호 생성 버튼 */}
            <div className="mb-2">
              <button type="submit" className="px-1 ml-64 border">
                Generate Password
              </button>
              <button className="px-1 ml-1 border">reset</button>
            </div>
          </form>
          {/* 비밀번호 생성 되는곳 */}
          <div className="flex mb-2">
            <div className="w-64">Your New Password:</div>
            <div className="flex">
              <div className="border min-w-[16rem]">비밀번호</div>
              <button className="px-2 ml-2 border">Copy</button>
            </div>
          </div>
          {/* 이전 비밀번호 */}
          <div className="flex">
            <div className="w-64">Remember your password:</div>
            <div>이전 비밀번호</div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
