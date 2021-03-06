import * as React from 'react';

export interface Props {
}

class Navigation extends React.Component<Props, object> {

    constructor(props: Props) {
        super(props);
    }

    render() {

        return (
            <div className="col-2">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home"
                       role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile"
                       role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages"
                       role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings"
                       role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                </div>
            </div>
        );
    }
}

export default Navigation;
