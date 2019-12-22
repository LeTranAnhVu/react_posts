import React from "react";
import jsonPlaceholder from "../apis/jsonPlaceholder";


class UserInfo extends React.Component {
    state = {user: {}};
    fetchUser = async (userId) => {
        const user = (await jsonPlaceholder.get(`users/${userId}`)).data;
        this.setState({
            user: user
        });
    };

    componentDidMount() {
        this.fetchUser(this.props.userId);
    }

    render() {
        return (
            <div>{this.state.user.name || ''}</div>
        )
    }
};


export default UserInfo;