import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { articles: state.articles };
};

// let getPosts = (articles) =>
//     fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
//         .then(res => res.json())


const ConnectedList = ({ articles }) => (
    // fetchData() {
    //     getPosts(...state, articles)
    // }
    <ul className="list-group list-group-flush">
        {articles.map(el =>
            <li className="list-group-item" key={el.id}>
                {el.title}: {el.body}
            </li>     
        )}
    </ul>
);

const List = connect (mapStateToProps) (ConnectedList);

export default List;