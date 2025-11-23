import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: 10,
      showAd: true,
    };
    this.timerId = null;
  }

  tick = () => {
    const { countdown } = this.state;
    if (countdown === 1) {
      clearInterval(this.timerId);
      this.setState({ countdown: 0, showAd: false });
      return;
    }
    this.setState({ countdown: countdown - 1 });
  };

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { countdown, showAd } = this.state;
    if (showAd) {
      return (
        <>
          <p>Bla Bla Bla</p>
          <p>{countdown}</p>
        </>
      );
    }
    return <a href="https://dfiles.com/ru/">Натисніть тут</a>;
  }
}
export default Timer;
