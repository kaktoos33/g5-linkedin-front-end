import { relative } from "path";
import React from "react";
import CreatePost from './CreatePost'
import NormalPost from './NormalPost'
import Navbar from './Navebar'

interface HomeProps {

}

interface Homestate {

}

class Home extends React.Component<HomeProps, Homestate>{
    render() {
        return (
            <div>
                <CreatePost />
                <NormalPost />
            </div>
        )
    }
}
export default Home;