import { MemesGallery } from "./WolfGallery";

const App = () => (
  <div className="App">
    <MemesGallery
      photos={[
        {
          id: 1,
          src: "/photos/1.jpg",
          description: "meme 1",
        },
        {
          id: 2,
          src: "/photos/2.jpg",
          description: "meme 2",
        },
        {
          id: 3,
          src: "/photos/3.jpg",
          description: "meme 3",
        },
        {
          id: 4,
          src: "/photos/4.jpg",
          description: "meme 4",
        },
        {
          id: 5,
          src: "/photos/5.jpg",
          description: "meme 5",
        },
        {
          id: 6,
          src: "/photos/6.jpg",
          description: "meme 6",
        },
        {
          id: 7,
          src: "/photos/7.jpg",
          description: "meme 7",
        },
      ]}
    />
  </div>
);

export default App;
