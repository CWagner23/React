import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

import '../style/react-style.css';

var CreatableDemo = createClass({




	displayName: 'CreatableDemo',
	propTypes: {
		hint: PropTypes.string,
		label: PropTypes.string
	},
	getInitialState () {
		return {
			atTop: true,
			multi: true,
			multiValue: [],
			options: [
				{ value: 'R', label: 'Red' },
				{ value: 'G', label: 'Green' },
				{ value: 'B', label: 'Blue' }
			],
			value: undefined
		};
	},
	handleOnChange (value) {
		const { multi } = this.state;
		if (multi) {
			this.setState({ multiValue: value });
		} else {
			this.setState({ value });
		}
	},
  submitList (event) {
    event.preventDefault();
		console.log("Event: ", event);
    console.log("Attributes: ", this.multiValue);
	},
	render () {
		const { atTop, multi, multiValue, options, value } = this.state;
		return (
			<div className="section">
				<Select.Creatable
					multi={multi}
					options={options}
					onChange={this.handleOnChange}
					value={multi ? multiValue : value}
					showNewOptionAtTop={atTop}
				/>
				<div className="hint">{this.props.hint}</div>
        <form onSubmit={this.submitList}>

          <input className='btn btn-primary submitButtonRight' type='submit' value='Submit' />
        </form>
			</div>
		);
	}
});

export default CreatableDemo;
