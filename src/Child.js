import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child extends Component {

static contextTypes={
xing:PropTypes.string
}



    render() {
        return (
            <div>
                我姓：{this.context.xing}
            </div>
        );
    }
}

export default Child;