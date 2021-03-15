import react from 'react'

 class Buttons extends react.Component {
     constructor(props) {
         super();
     }
    render() {
        return (
            <div>
                <button>{this.props.name}</button>
            </div>
        )
    }
}

export default Buttons
