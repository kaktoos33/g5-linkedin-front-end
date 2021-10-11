import React from 'react';
//import { ReactComponent as Userimg } from 'G:\Rahnama Collage\LinkedIn\g5-linkedin-front-end\src\Rectangle 17.svg';
import ReactLogo from './Rectangle 17.svg';
import CreatePost from './components/CreatePost';

type AppState = {
  post?: string[];
}
class App extends React.Component {
  state: AppState = { post: ["چیزی بنویس..."] };
  render() {
    return (
      <CreatePost header={
        <img src={ReactLogo} alt="UserPic" />
      } />

    )
  }
}

export default App;
