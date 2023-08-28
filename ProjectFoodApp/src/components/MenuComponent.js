import React, { useState } from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle, Button
} from 'reactstrap';
import DishDetails from './DishdetailComponent';
import CarouselComponent from './CarouselComponent';
import Cart from './CartComponent';
import { useCart } from './CartContext';
import SearchComponent from './SearchComponent';
import SearchRatingComponent from './SearchRatingComponent';

export default function Menu(props) {
    const [selectedDish, setSelectedDish]=useState(null);
    const [cart, setCart] = useState([]);
    const [isCartModalOpen, setCartModalOpen] = useState(false);
    const { addToCart } = useCart();
    const [searchResults, setSearchResults] = useState(props.dishes);
    const [searchedDishes, setSearchedDishes] = useState(props.dishes);
    const [searchTerm, setSearchTerm] = useState('');

    const  onDishSelect=(dish)=> {
        setSelectedDish(dish);
    }
    const handleSearch = () => {
        if (searchTerm.trim() === '') {
          // If the search term is empty or contains only whitespace, display all dishes.
          setSearchResults(props.dishes);
        } else {
          // Otherwise, filter the dishes based on the search term.
          const filteredDishes = props.dishes.filter((dish) =>
            dish.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSearchResults(filteredDishes);
        }
      };

      // Function to handle the search by rating
        const handleSearchByRating = (rating) => {
            // Filter dishes based on the rating and update the state
            const filteredDishes = props.dishes.filter((dish) => dish.rating >= rating);
            setSearchedDishes(filteredDishes);
        };
    const handleAddToCart = (dish) => {
        const updatedCart = [...cart, dish];
        setCart(updatedCart);
        console.log(cart);
        addToCart(dish);
        // dispatch(addToCartAction(dish));
    };
    const toggleCartModal = () => {
        setCartModalOpen(!isCartModalOpen);
    };

    const menu = searchResults.map((dish) => {
                return (
                    <div className="col-12 col-md-2 m-1">

                        <Card key={dish.id} onClick={() => onDishSelect(dish)}>

                            <CardImg width="100%" src={dish.image} alt={dish.name} />

                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
            
                        </Card>

                        <Button onClick={() => handleAddToCart(dish)}>Add to Cart</Button>
                    </div>
                );
            });

            return (
                <div className="container">
                    {/* <div>
                        <CarouselComponent dishes={searchResults1}/>
                    </div> */}
                    <center>
                    <SearchComponent handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    </center>
                    <br />
                    <center>
                    <SearchRatingComponent handleSearchByRating={handleSearchByRating} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    </center>

                    <div className="row">
                        {menu}
                    </div>

                    <Cart cartItems={cart} toggleModal={toggleCartModal} isModalOpen={isCartModalOpen} />

                    <DishDetails dish={selectedDish} />
                </div>
            );
}

