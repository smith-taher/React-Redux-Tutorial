import React from "react";
import List from "./List";
import Form from "./Form";
import Homepage from "./Homepage";

const App = () => (
    <div className="row mt-5">
        <Homepage />
        <div className="col-md-4 offset-md-1">
        <h2>Posts</h2>
            <List />
        </div>
        <div className="col-md-4 offset-md-1">
        <h2>Add a new post</h2>
        <Form />
        </div>
    </div>
);

export default App;