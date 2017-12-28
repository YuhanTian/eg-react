import React from 'react';
import PropTypes from 'prop-types';
import FlankingStrategy from '../model/FlankingStrategy';

class FlankingStratConfig extends React.Component {
    static propTypes = {
        strategy: PropTypes.instanceOf(FlankingStrategy).isRequired,
        onNewStrategy: PropTypes.func,
    };

    static defaultProps = {
        onNewStrategy: () => undefined
    };

    constructor(props) {
        super(props);
        this.state = {
            error: null,
        };
    }

    inputChanged(propToChange, value) {
        const newStrat = this.props.strategy.cloneAndSetProp(propToChange, value);
        let isError = false;
        try {
            newStrat.assertIsValid();
        } catch (error) {
            isError = true;
            this.setState({error: error});
        }

        if (!isError) {
            this.props.onNewStrategy(newStrat);
            this.setState({error: null});
        }
    }

    render() {
        return (
        <div>
            <h4>Set flanking region</h4>
            <label>
                Upstream bases
                <input
                    type="number"
                    value={this.props.strategy.upstream}
                    onChange={event => this.inputChanged("upstream", Number.parseInt(event.target.value, 10))}
                />
            </label>
            <label>
                Downstream bases
                <input
                    type="number"
                    value={this.props.strategy.downstream}
                    onChange={event => this.inputChanged("downstream", Number.parseInt(event.target.value, 10))}
                />
            </label>
            <label>
                Surrounding:
                <select
                    value={this.props.strategy.type}
                    onChange={event => this.inputChanged("type", Number.parseInt(event.target.value, 10))}
                >
                    <option value={FlankingStrategy.SURROUND_ALL}>Gene body</option>
                    <option value={FlankingStrategy.SURROUND_START}>Transcription start</option>
                    <option value={FlankingStrategy.SURROUND_END}>Transcription end</option>
                </select>
            </label>
            {this.state.error ? this.state.error.message : null}
        </div>
        )
    }
}

export default FlankingStratConfig;