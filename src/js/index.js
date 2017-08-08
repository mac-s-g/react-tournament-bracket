import React from 'react';

require('/react/src/style/scss/global.scss');

export default class extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.init(props);
    }

    //default state
    state = {}

    //all acceptable props and default values
    defaults = {}

    init = (props) => {
        for (let i in this.defaults) {
            if (props[i] !== undefined) {
                this.state[i] = props[i];
            } else {
                this.state[i] = this.defaults[i];
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.init(nextProps);
        this.setState(this.state);
    }

    render() {
        const {state} = this;
        return (<div>this is your entrypoint</div>);
    }

}