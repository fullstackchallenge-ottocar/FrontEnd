import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MainPage extends React.Component {
    handleLogout = () => {
        localStorage.clear();
        window.location.reload(true);
    };
    render() {
        return (
            <div>
                Otto Car - Full Stack Challenge
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {

        },
        dispatch
    );
}

function mapStateToProps({ trips }) {
    return {

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);
