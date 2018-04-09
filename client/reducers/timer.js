
//actions
const TIMER_TICK = 'TIMER_TICK';
const TIMER_STOP = 'TIMER_STOP';
const TIMER_START = 'TIMER_START';

//action creators
let timer = null;

export const timerStart = (seconds) => ({
  type: TIMER_START,
  seconds
})

export const timerTick = (second) => ({
  type: TIMER_TICK,
  second
})

export const timerStop = () => {
  return {
    type: TIMER_STOP
  }
}

//thunkerators
export const timerThunkerator = (seconds) => {
  return (dispatch) => {
    dispatch(timerStart(seconds));
    timer = setInterval(() => {
      dispatch(timerTick())
    }, 1000)
  }
}

//reducer
export default (prevState = 0, action) => {
  switch (action.type) {

    case TIMER_START:
      return action.seconds;

    case TIMER_TICK:
      return prevState - 1;

    case TIMER_STOP:
      return 0;

    default: return prevState;
  }
}