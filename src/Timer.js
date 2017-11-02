import EventDispatcher from './EventDispatcher';
class Timer extends EventDispatcher {
  static TIMER = 'timer';
  static TIMER_COMPLETE = 'timerComplete';

  constructor(delay, repeatCount = -1, immediatelyRunFirst=false) {
    super();

    this.delay = delay;
    this.repeatCount = repeatCount;
    this.immediatelyRunFirst = immediatelyRunFirst;
  }

  delay;
  repeatCount;
  /**
   * 当 start 时 立即执行一次 timer
   */
  immediatelyRunFirst;

  running() {
    return this.timerInterval != -1;
  }

  _currentCount = 0;

  get currentCount() {
    return this._currentCount;
  }

  timerInterval = -1;

  reset() {
    this.stop();
    this._currentCount = 0;
  }

  stop() {
    clearInterval(this.timerInterval);
    this.timerInterval = -1;
  }

  start() {
    this.timerInterval =
      setInterval(()=>this.$timerHandler(), this.delay);
    if(this.immediatelyRunFirst){
      this.$timerHandler();
    }
  }

  $timerHandler() {
    this._currentCount++;
    let completed = this.repeatCount > 0 && this.currentCount == this.repeatCount;
    if (this.repeatCount > 0 && this.currentCount >= this.repeatCount) {
      this.stop();
    }
    this.dispatchEvent(Timer.TIMER);
    if(completed){
      this.dispatchEvent(Timer.TIMER_COMPLETE);
    }
  }
}
module.exports = Timer;
