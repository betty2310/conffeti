import React from "react"
import lottie from "lottie-web"
import * as styles from "../components/index.module.css"
import Layout from "../components/layout"

import animation from "../static/star.json"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { show: false }
  }

  componentDidUpdate() {
    if (this._el) {
      this._animation = lottie.loadAnimation({
        container: this._el,
        renderer: "svg",
        animationData: animation,
      })
    }
  }

  _click = () => {
    this.setState({ show: true })

    setTimeout(() => this.setState({ show: false }), 1500)
  }

  render() {
    return (
      <Layout>
        <div className={styles.textCenter}>
          <p>
            {"Click "}
            <span
              style={{
                fontWeight: "bold",
                color: "orange",
                cursor: "pointer",
              }}
              onClick={this._click}
            >
              xoxo
            </span>
            {" to confetti!!"}
          </p>
          <p>
            Chúc 4 bạn mãi xinh đẹp, may mắn, nhiều thành công. Học toàn được{" "}
            <b>A</b>, lấy nhiều học bổng của trường để không sợ tăng 10% học phí
            như hôm nay.
          </p>
          <p>
            Và nhất là gánh mình qua <b>môn này </b>😉
          </p>
          {this.state.show && (
            <div
              id="animation"
              ref={el => (this._el = el)}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
              }}
            />
          )}
        </div>
      </Layout>
    )
  }
}
export default IndexPage
