import React , { Component } from "react"
import CreateRoomPage from "./CreateRoomPage"
import RoomJoinPage from "./RoomJoinPage"

//imports for react router dom 
import { BrowserRouter as Router , Switch , Route , Link , Redirect } from "react-router-dom"
//

// this is the page for None url
// this class is that will handle the page url
export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' >
                        <h1>
                            this is the home page
                        </h1>
                    </Route>
                    <Route path="/join" component= {RoomJoinPage} />
                    <Route path="/create" component= {CreateRoomPage} />
                </Switch>
            </Router>
        );
    }
}