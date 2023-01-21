export interface AlbumRawData {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
}

const albums: AlbumRawData[] = [
  {
    id: "111",
    title: "The greatest hits",
    author: "Queen",
    imageUrl:
      "https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.f795-N2T/SharedImage-13049.jpg?t=fc5655c20084b7fba6d8",
  },
  {
    id: "222",
    title: "Toxicity",
    author: "System of down",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg",
  },
  {
    id: "333",
    title: "Hybrid Theory",
    author: "Linkin Park",
    imageUrl:
      "https://i1.sndcdn.com/artworks-YTslQ8PYtSFnB3Un-b7hLkA-t500x500.jpg",
  },
  {
    id: "444",
    title: "Ride the Lightning",
    author: "Metallica",
    imageUrl:
      "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/0f/7a/74/0f7a7472-92fa-e77d-384a-1e4304705e83/dj.jbiruenb.png/316x316bb.webp",
  },
  {
    id: "555",
    title: "Nevermind",
    author: "Nirvana",
    imageUrl:
      "https://cdn.arstechnica.net/wp-content/uploads/2021/08/nevermind-800x800.jpg",
  },
  {
    id: "666",
    title: "Raign in Blood",
    author: "Slayer",
    imageUrl: "https://m.media-amazon.com/images/I/512L+8UXJVL._SY580_.jpg",
  },
  {
    id: "777",
    title: "Slim Shady",
    author: "Eminem",
    imageUrl: "https://images.morele.net/i256/1173624_1_i256.jpg",
  },
];

export default albums;
