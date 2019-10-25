export default {
    apiKey: "AIzaSyCgA20fCHbTApoYBA8zzKYKgEneofXuOOQ",
    authDomain: "reddit-clone-d5c1c.firebaseapp.com",
    databaseURL: "https://reddit-clone-d5c1c.firebaseio.com",
    projectId: "reddit-clone-d5c1c",
    storageBucket: "reddit-clone-d5c1c.appspot.com",
    messagingSenderId: "1097777121023",
    appId: "1:1097777121023:web:48aa602828ab2cb374eeca",
    measurementId: "G-XL4N8K3X35"
  }

// class AddPost extends Component {
//   constructor() {
//     super();

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   state = {
//     title: ''
//   };

//   handleChange = (e) => {
//     this.setState({
//       title: e.target.value
//     });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.firebaseRef.push({
//       title: this.state.title
//     });

//     this.setState({
//       title: ''
//     });
//   }

//   render() {
//     return (
//       <div className="AddPost">
//         <input
//           type="text"
//           placeholder="Write the title of your post"
//           onChange={ this.handleChange }
//           value={ this.state.title }
//         />
//         <button
//           type="submit"
//           onClick={ this.handleSubmit }
//         >
//           Submit
//         </button>
//       </div>
//     );
//   }
// }
