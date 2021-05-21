import React from 'react';

function UserProfileCard(props) {
	const mailLink = "mailto:" + props.user.email;
	return (
		<div className="row">
			<div className="col-lg-3">
				<img src={props.user.img} alt={props.user.name} className="img-fluid"/> 
			</div>    
			<div className="col-lg-9">
				<p>{props.user.name}</p>
				<a href={mailLink}>{props.user.email}</a>
			</div>
		</div>
	);
}

class UserProfile extends React.Component {
	render() {
		const user = {
			name: "Anand Agarwal",
			email: "anand.a@bk.com",
			img: "img1.jpg"
		};
		return (
			<UserProfileCard user={user} />
		);
	}
}
export default UserProfile;
