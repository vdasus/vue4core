import { CNT_INCREMENT, CNT_DECREMENT, CNT_SET_DELAY, CNT_SET_CACHED, SET_LANG } from "./mutation-types";

export default {
    [CNT_INCREMENT]: state => state.count++,
    [CNT_DECREMENT]: state => state.count--,
    [CNT_SET_DELAY](state, isdelay) {
        state.isDelayed = isdelay;
    },
    [CNT_SET_CACHED](state, isCached) {
        state.isCached = isCached;
    },
    [SET_LANG](state, lang) {
        state.lang = lang;
    }
};