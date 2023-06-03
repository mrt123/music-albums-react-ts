import Album from "../common/musicAlbum/Album";
import AlbumImage from "../common/musicAlbum/AlbumImage";

const homePageParagraphStyle = {
  fontSize: "18px",
  fontFamily: "'Courier New', monospace",
  margin: "30px",
  display: "inline-block",
};

function HomePage() {
  return (
    <div className="App">
      <p style={homePageParagraphStyle}>
        Checkout out our music albums. These are the top albums on iTunes at the
        moment. If you like any of them, feel free to add them to a shopping
        cart.
      </p>
      <p style={homePageParagraphStyle}>
        Also have a look at our hand picked favourites (we often run some good
        discounts on those).
      </p>
      <p>Nasi kandydaci na cover Image:</p>
      <div style={{ display: "flex" }}>
        <AlbumImage imageUrl="http://i.pinimg.com/originals/66/e5/1a/66e51af8cf1c40f711afff27fe106b91.jpg" />
        <AlbumImage imageUrl="https://www.boredpanda.com/blog/wp-content/uploads/2016/10/cute-sloths-57f269182f5ab__700.jpg" />
        <AlbumImage imageUrl="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/10/06/15/42-33343661.jpg" />
        <AlbumImage imageUrl="https://bigbaddice.pl/wp-content/uploads/2016/11/zwierzogr%C3%B3d.jpg" />
        <AlbumImage imageUrl="https://pbs.twimg.com/media/FgpkUcsXkAQ6fMj.jpg" />
        <AlbumImage imageUrl="https://hubun.pl/img/cms/blog/corgi-jezyk.jpeg" />
      </div>
      <p>Ponizej propozycja komponentu od Gustawa:</p>
      <Album
        number={1}
        coverImageUrl="http://i.pinimg.com/originals/66/e5/1a/66e51af8cf1c40f711afff27fe106b91.jpg"
        description={{
          title: "wiem jak użyc komponentuw react",
          artist: "ZDFRONpol22",
          price: 2,
        }}
      />
    </div>
  );
}

export default HomePage;
