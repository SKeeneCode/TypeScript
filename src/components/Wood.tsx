import * as React from 'react';
import '../css/Hello.css';

export interface Props {
    wood: number;
}

class Points extends React.Component<Props, object> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { wood } = this.props;

        return (
            <div className="hello">
                <div className="greeting">
                    Wood: {wood}
                </div>
            </div>
        );
    }

}

export default Points;
