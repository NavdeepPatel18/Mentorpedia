import React from "react";
import "../style/Search.css";
import logo from "./Assets/Logo_size_100.png";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	// Button,
} from "reactstrap";

import { Link } from "react-router-dom";
import { Search, Grid, Header, Segment, Button } from "semantic-ui-react";

function SearchBox(props) {
	const goBack = () => {
		props.history.push("/");
	};

	return (
		<div className="search">
			<div className="search__form">
				<div className="search__form-logo">
					<img src={logo} alt="logo" onClick={goBack} />
				</div>
				<div className="search_grid">
					<Grid columns="equal">
						<Grid.Column floated="left" width={9}>
							<Search fluid />
						</Grid.Column>
						<Grid.Column className="search_grid_col" floated="right" width={4}>
							<Button>Search</Button>
						</Grid.Column>
					</Grid>
				</div>
			</div>
			{/* <Card>
				<CardImg
					top
					width="100%"
					src=""
					alt="Card image cap"
				/>
				<CardBody>
					<CardTitle tag="h5">Card title</CardTitle>
					<CardSubtitle tag="h6" className="mb-2 text-muted">
						Card subtitle
					</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card> */}
			<div className="show">
				<div className="show_result">No results found</div>
			</div>
		</div>
	);
}

export default SearchBox;
