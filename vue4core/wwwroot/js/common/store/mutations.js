export default {
    increment: state => state.count++,
    decrement: state => state.count--,
    setDelay(state, isdelay) {
        state.isDelayed = isdelay;
    },
    setCached(state, isCached) {
        state.isCached = isCached;
    }
};