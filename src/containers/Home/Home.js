import React, {Component} from 'react';

import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div></div>
        );
    };
};

const mapStateToProps = state => {
    return {
        allQuestions: state.home.questions
    };
};


export default connect(mapStateToProps)(Home);