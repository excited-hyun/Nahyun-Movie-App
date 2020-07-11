import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  
  return (
  <div>
    <h3>I Love {name}</h3>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
  );

}
const foodILike = [
  {id: 1, name: 'Peach', rating: 4.3, image: 'https://image.shutterstock.com/image-photo/peach-isolate-slice-leaf-on-260nw-1550458292.jpg'},
  {id: 2, name: 'Apple', rating: 3.5, image: 'https://t1.daumcdn.net/cfile/tistory/2502973855D2D9702C'},
  {id: 3, name: 'Pear', rating: 3.6, image:'https://dictionary.cambridge.org/ko/images/thumb/pear_noun_002_26910.jpg?version=5.0.102'},
  {id: 4, name: 'Melon', rating: 3.8, image:'https://www.fondation-louisbonduelle.org/wp-content/uploads/2016/09/melon_194841866.png'},
  {id: 5, name: 'Kiwi', rating: 4.7, image:'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/vRb/image/Wk_WtXrYhEZLO_vVY8pWEYQiAew.jpg'},
  {id: 6, name: 'Orange', rating: 4.6,image:'https://cdn.shopify.com/s/files/1/1740/4747/products/Orange_Juice_Perth_CBD_2048x.jpg?v=1586142573'}
];

function App() {
  return (
  <div>
    {foodILike.map(dish => (<Food key = {dish.id} name = {dish.name} picture={dish.image} rating={dish.rating}/>))}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
