import * as React from 'react';
import { FunctionComponent } from 'react';
import CreatePost from './CreatePost'
import NormalPost from './NormalPost'
interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <div>
            <CreatePost />
            <NormalPost />
        </div>
    );
}

export default Home;