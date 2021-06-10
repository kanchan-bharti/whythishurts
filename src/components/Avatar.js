import React from 'react';

// Images:
import male_body from '../assets/male_yabody.png';

class Avatar extends React.Component {
    render() {
        return (
            <div className="">
                <img src={male_body} alt="Male Body"/>
                <map name="male_body">
                    <area shape="rect" coords="x1,y1,x2,y2" href=""></area>
                </map>
            </div>
        )
    }
}

export default Avatar;