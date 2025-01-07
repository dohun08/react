import {atom} from "recoil";
export const countAtom = atom({
   key:"count",
    default:{
        value:0,
        name:'test'
    }
});