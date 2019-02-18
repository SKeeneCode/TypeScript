import * as React from 'react';
import '../css/Hello.css';

export interface Props {
    name: string;
    points: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

class Points extends React.Component<Props, object> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { name, points, onIncrement, onDecrement } = this.props;

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + points}
                </div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        );
    }
}

export default Points;
