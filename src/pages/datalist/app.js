/********************************
 * @file: Data List page
 * @desc: react datalist page view
 * @author: kuma
 *******************************/
import React, { Component } from "react";
import Nav from "component/nav";
import Footer from "component/footer"

export default class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<div className="main index column is-8">
					<h1 className="title">React datalist page</h1>
					<p>Webpack is widely used for single-page packaging.Scaffolding, led by create-react-app, is numerous.Single-page packaging usually refers to the business js, CSS packaging into the same HTML file, the whole project has only one HTML file entry.However, there are many businesses that require multiple entries to different pages, such as different h5 activities, or official websites that support seo, which require multiple different HTML,The webpack-react-multi-page architecture enables you to automate the packaging of newly created pages on multiple pages during project development and ensures that each page is hot replacement,and the build package has a clear hierarchy of files</p>
					<h1 className="title mt20">Feature</h1>
					<h1 className="title mt20">Quick Start</h1>
					<p className="mt20">install rppx-cli in global and create your new project ,use npm start the project</p>
					<pre>
						$ npm install rppx-cli -g
					</pre>
					<p className="mt20">create your multi page</p>
					<pre>
						$ rppx init my-react
					</pre>
					<p className="mt20">	install dependencies </p>
					<p className="mt20">Automatically open browser with <a href="http://localhost:3100">http://localhost:3100</a></p>
				</div>
				<Footer />
			</div>
			
		);
	}
}
