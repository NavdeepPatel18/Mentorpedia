import React from "react";
import Footer from "./FooterSmall";
import Logo from "../components/Logo.png";
import "../style/Home.css";
import { Link } from "react-router-dom";
import { Search, Grid, Header, Segment, Button } from "semantic-ui-react";

function Home(props) {
	const [state, setState] = React.useState("");
	const searchGoogle = (e) => {
		props.history.push({ pathname: "/search", state });
	};
	return (
		<div className="home-bg">
			<img
				src={Logo}
				style={{
					position: "absolute",
					width: "40%",
					marginTop: "5%",
					marginBottom: "auto",
					marginLeft: "30%",
				}}
			/>
			<div className="home">
				<div className="home__container">
					<div className="home_grid_margin">
						<Grid>
							<Grid.Column width={10} className="home_grid_col_margin">
								<Search fluid size="massive" placeholder="Search here..." />
								<center className="home__group">
									<Link to="/search">
										{/* <Button>Search</Button> */}
										<input type="button" className="home__btn" value="Search" />
									</Link>
								</center>
							</Grid.Column>
						</Grid>
					</div>
					{/* <Footer /> */}
				</div>
			</div>
		</div>
	);
}

export default Home;
