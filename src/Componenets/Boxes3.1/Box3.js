import react from 'react';
import Box4 from './Box4';

class Box3 extends react.Component {
    constructor(props) {
        super();
    }

    render() {
        return <div className="box3">
           <Box4 name={"gilad"}/>
           <Box4 name={"yefet"}/>
            

        </div>
    }
}

export default Box3;
