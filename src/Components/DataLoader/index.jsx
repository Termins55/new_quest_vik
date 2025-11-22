import React, { Component } from "react";

class DataLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: true,
    };
  }

  loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data, isLoading: false }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { posts, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading....</p>;
    }
    return (
      <div>
        <h2>Список постів</h2>
        {posts.map((p) => {
          return (
            <article key={p.id}>
              <h3>
                {p.title} (ID: {p.id})
              </h3>
              <p>{p.body}</p>
            </article>
          );
        })}
      </div>
    );
  }
}
export default DataLoader;
