import React from 'React';

class LogOnForm extends React.Component {
	construtor(props) {
		super(props);
		this.state = {
			username: null,
			password: null
		}
	}

	setUsername(user) {
		this.setState({ username: user });
	}

	setPassword(pass) {
		this.setState({ password: pass });
	}

	handleSubmit(){
		console.log('Submitting Form');
		console.log('Username', this.state.username);
		console.log('Password', this.state.password);
		// push data with ajax
	}

	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<label>
						Username:
						<input type="text" value={this.state.username} onChange={(e) => {this.setUsername(e.target.value)}}/>
					</label>

					<label>
						Password:
						<input type="text" value={this.state.password} onChange={(e) => {this.setPassword(e.target.value)}}/>
					</label>

					<button type="submit">
						Submit
					</button>
				</form>
			</>
		)
	}
}
