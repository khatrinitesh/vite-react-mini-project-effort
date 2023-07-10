import React, { Component } from 'react';
import axios from 'axios';
import ImgList from './imglist';


export default class CustomApp extends Component {

    constructor() {
		super();
		this.state = {
			imgs: []
		};
	}


    componentDidMount() {
		axios
			.get(`https://api.unsplash.com/photos/?client_id=cDWDr2wVdsZ0cAhlLUWV3-M5LHE8G30I-iCr_8PREY4`)
			.then(data => {
				this.setState({ imgs: data.data });
				console.log({ imgs: data.data });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	}

  render() {
    return (
      <div>
        <div className="main-header">
					<div className="inner">
						<h1 className="main-title">ImageSearch</h1>
					</div>
				</div>
				<div className="main-content">
					<ImgList data={this.state.imgs} />
				</div>
      </div>
    )
  }
}
