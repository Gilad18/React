import React from 'react'

class HideSeek extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: true
        }
    }

    toggle = () => {
        if (this.state.isShow) {
            this.setState({ isShow: false })
        }
        else if (!this.state.isShow) {
            this.setState({ isShow: true })
        }
    }
    render() {
        if (this.state.isShow) {
            return (
                <div>
                    <button onClick={this.toggle}>ShowHide</button>
                    <div className="box"></div>
                </div>
            )
        } else if (!this.state.isShow) {
            return (
                <div>
                    <button onClick={this.toggle}>ShowHide</button>
                    <div ></div>
                </div>
            )

        }
    }
}
    export default HideSeek
