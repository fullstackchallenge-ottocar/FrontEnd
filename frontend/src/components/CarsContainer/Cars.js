import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCars } from '../actions/fetchCarCreator';
import Car from './Car';
import { deleteCar } from '../actions/deleteCarCreator';
import { addCar } from '../actions/addCarCreator';
import { editCar } from '../actions/editCarCreator';
import { StyledCars } from '../StyledComponents/StyledCars';

class Cars extends React.Component {
	componentDidMount() {
		this.props.fetchCars();
	}
	render() {
		return (
			<div>
				<StyledCars>
					{this.props.cars.map((car, idx) => (
						<Car car={car} key={idx} deleteCar={this.props.deleteCar} editCar={this.props.editCar} />
					))}
				</StyledCars>
			</div>
		);
	}
}

function mapStateToProps({ cars }) {
	return {
		cars
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchCars,
			deleteCar,
			addCar,
			editCar
		},
		dispatch
	);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cars));