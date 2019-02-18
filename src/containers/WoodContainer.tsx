import Points from '../components/Points';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ wood }: StoreState) {
    return {
        wood: wood,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Points);