import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	constructor() {
		super();

		this.state = {
			data:
			[
				{
					"id" : 1,
					"name" : "Joe",
					"age" : "28"
				},
				{
					"id" : 2,
					"name" : "Suzan",
					"age" : "22"
				},
				{
					"id" : 3,
					"name" : "John",
					"age" : "32"
				},
				{
					"id" : 4,
					"name" : "Martin",
					"age" : "20"
				}
			]
		}
	}

	render() {
		return (
			<div>
				<Header/>
				<table>
					{this.state.data.map((person, i) => <TableRow key = {i} data = {person}/>)}
				</table>
				<Footer/>
			</div>
		);
	}
}










class Header extends React.Component {
	render() {

		var headerStyle = {
			color: '#cc0000'
		}

		return (
			<div>
				<h1 style = {headerStyle}>Headeris</h1>
			</div>
		);
	}
}

class TableRow extends React.Component {
	render() {
		return (
			<tr>
				<td width = '20'>{this.props.data.id}</td>
				<td width = '250'>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		);
	}
}


class Footer extends React.Component {
   render() {
      
      var i = 1;
      var contentStyle = {
      	color: '#999999',
      	fontSize: 12
      }

      return (
         <div>
            <h2>Content</h2>
            <p style = {contentStyle}>{i == 1 ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum, sem a sodales lacinia, augue mauris scelerisque risus, vitae vulputate mauris dui vel massa. Maecenas sed tristique leo. Fusce laoreet laoreet purus at finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac suscipit tellus. Donec hendrerit, ante rutrum sollicitudin fermentum, risus massa maximus lectus, in vulputate felis nibh quis lorem. Suspendisse potenti. Duis et nunc sed libero aliquet auctor ac ut felis. Sed fermentum non magna nec mollis. Donec gravida tempor leo et tincidunt. ' : 'Fail'}</p>
        	{/* style with CamelCase syntax + conditionl (ternary) expression */}
         </div>
      );
   }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
