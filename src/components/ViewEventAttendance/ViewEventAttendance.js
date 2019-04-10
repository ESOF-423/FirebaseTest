import React, { Component } from "react";
import { withFirebase } from "../Firebase";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200
	},
	dense: {
		marginTop: 19
	},
	menu: {
		width: 200
	}
});

class ViewEventAttendance extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: "",
			lastName: "",
			eventName: this.props.location.state,
			eventUID: this.props.location.state
		};
	}

	render() {
		return (
			<div>
				<Grid container justify="center">
					<Grid item xs={12} sm={8} md={6} lg={6}>
						<div align="center" style={{ marginTop: "20px" }}>
							<Card>
								<CardHeader
									title={"Members attending " + this.state.eventName.eventName + ":"}
								/>
								<CardContent>
									<div id = "attendingMemberList">
									 {/* {this.props.firebase.doGetEventAttendance(this.state.eventUID.eventUID)} */}
									 </div>
								</CardContent>
							</Card>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}

ViewEventAttendance.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(ViewEventAttendance));
