import React from "react";
import _ from "lodash";
import {connect} from "react-redux";

class UserInfo extends React.Component {
    renderUser = () => {
        const {user} = this.props;
        if (user) {
            return (
                <div>{user.name}</div>
            )
        }
        return null;
    };

    render() {
        return this.renderUser()
    }
};


const mapState2Props = (state, ownProps) => {
    return {
        user: _.find(state.users, (user) => user.id === ownProps.userId)
    }
}

export default connect(mapState2Props)(UserInfo);