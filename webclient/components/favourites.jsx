import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import MyCard from './restaurant/child3.jsx';

class MyFavourites extends React.Component{
  constructor() {
    super();
    this.state = {
      objArray : []
    };
   // this.change = this.change.bind(this);
    this.getFavourites = this.getFavourites.bind(this);
    this.removeFavCard = this.removeFavCard.bind(this);
    this.updateComments = this.updateComments.bind(this);
  }

  getFavourites() {
    $.ajax({
			   url:"/restaurants/",
			 type:'GET',
			 beforeSend: function (request)
									 {
											 request.setRequestHeader("user-key", "46a2eab73fc526624bab1d5a65c8001a");
									 },
			success: function(data)
			{
				console.log('Successfully got JSON from Zomato' + data);
				console.log(JSON.stringify(data,undefined,2));
        this.setState({
          objArray: data
        });
			}.bind(this),
			error: function(err)
			{
				console.log('error occurred on AJAX');
				console.log(err);
			}.bind(this)
		});
  }



   removeFavCard(id){
       var favArray = this.state.objArray;
   var arr=[];
   console.log(JSON.stringify(favArray));
   for(var obj of favArray){
     if(obj._id!=id){
       arr.push(obj);
     }
   }
   this.setState({objArray : arr});
   }

   updateComments(id,comments){
   	var favArray = this.state.objArray;
      for (var obj of favArray) {
          if (obj._id === id) {
              obj.comments = comments;
          }
      }
      this.setState({objArray: favArray});
  }


  componentDidMount() {
    this.getFavourites();
  }
  //  change(){
  //   this.getFavourites();
  // }
  render () {
    let values = this.state.objArray;
    let methodRef = this.removeFavCard;
    let updateRef = this.updateComments;
 	// let chan=this.change.bind(this);
		let cards = values.map(function(item) {
				return (
			<div>
					<MyCard id={item._id} image={item.imageurl}
					name={item.resName} cuisines={item.resCuisines} location={item.resAddress}
					ratings={item.resRating} comment={item.comments} distance={item.distance}
          fav = "fav" remove={methodRef}
					update={updateRef}/>

			</div>
			);
		});

		return (
			<div>
			<Card.Group itemsPerRow={2}>
				{cards}
			</Card.Group>
		</div>
		);
	}

}
module.exports = MyFavourites;
