import {atom, selector} from "recoil";
export const countAtom = atom({
   key:"count",
    default:0
});


export const isEvenState = selector({
    key: 'isEvenState', // 셀렉터의 고유 ID
    get: ({ get }) => {
        const counter = get(countAtom);
        return counter % 2 === 0 ? 'Even' : 'Odd'; // 짝수 또는 홀수 판단
    },
});


