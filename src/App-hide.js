import React from "react";
// import PropTypes from "prop-types";

// 컴포넌트 return 안의 html tag사이에 그냥 쓰면 text, {}안에 적으면 자바스크립트
// key값은 리액트 내부에서 요소를 나누기 위해 사용됨

class App extends React.Component {
    state = {
        count: 0
    };

    add = () => {
        console.log('plus');
        this.setState(current => ({ count: current.count + 1 }))
    };
    minus = () => {
        console.log('minus')
        this.setState(current => ({ count: current.count - 1 }))
    };

    componentDidMount() {
        console.log('Component mounting')
    }

    componentDidUpdate() {
        console.log('Component updated')
    }

    render() {
        console.log('rendering!')
        return (
            <div>
                <h1>The number is {this.state.count}</h1>
                <button onClick={this.add}>Plus</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}



export default App;


// function Food({ name, image, rating }) {
//   return <div>
//     <h1>I love {name}</h1>
//     <h4>{rating}/5.0</h4>
//     <img src={image} alt={name} />
//   </div>
// }

// const foodILike = [
//   {
//     id: 1,
//     name: 'peach',
//     image: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f42b5182138dffac9bf05b7%2F0x0.jpg%3FcropX1%3D549%26cropX2%3D8140%26cropY1%3D0%26cropY2%3D5693',
//     rating: 5.0
//   },
//   {
//     id: 2,
//     name: 'macarron',
//     image: 'https://www.sweetandsavorybyshinee.com/wp-content/uploads/2013/01/Basic-French-Macarons-1-600x650.jpg',
//     rating: 4.99
//   },
//   {
//     id: 3,
//     name: 'strawberry',
//     image: 'https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432664914-strawberry-facts1.jpg',
//     rating: 4.78
//   }
// ]

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired

// }

// 컴포넌트 return 안의 html tag사이에 그냥 쓰면 text, {}안에 적으면 자바스크립트
// key값은 리액트 내부에서 요소를 나누기 위해 사용됨
// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//         <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />
//       ))}
//     </div>
//   );
// }

/*

1. Mounting => 생성
2. Updating => 없뎃
3. Upmounting => 제거

*/