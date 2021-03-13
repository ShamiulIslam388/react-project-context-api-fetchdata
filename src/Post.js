import { myContext } from "./context/DataContext";

const Post = () => {
  return (
    <myContext.Consumer>
      {function (context) {
        return (
          <ol>
            {context.posts.map((post) => (
              <li>{post.title}</li>
            ))}
          </ol>
        );
      }}
    </myContext.Consumer>
  );
};

export default Post;
