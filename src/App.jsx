import "./App.css";
import ProductCardContainer from "./components/ProductCardContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="store">
      <NavBar user={user} />
      <ProductCardContainer products={products} />
      <Footer />
    </main>
  );
}
export default App;

const user = {
  firstName: "Olivia",
  lastName: "Parker",
  itemsInCart: 0,
};

const products = [
  {
    id: 1,
    name: "Retro Polaroid Camera",
    description:
      "Capture memories in style with this vintage-inspired instant camera.",
    price: 99.99,
    isInStock: false,
    imageUrls: [
      "https://placehold.co/400x200.jpg?text=1",
      "https://placehold.co/400x200.jpg?text=2",
      "https://placehold.co/400x200.jpg?text=3",
      "https://placehold.co/400x200.jpg?text=4",
      "https://placehold.co/400x200.jpg?text=5",
      "https://placehold.co/400x200.jpg?text=6",
    ],
  },
  {
    id: 2,
    name: "Wireless Bluetooth Headphones",
    description:
      "Enjoy your favorite tunes with these sleek and comfortable wireless headphones.",
    price: 79.99,
    isInStock: false,
    imageUrls: [
      "https://placehold.co/400x200.jpg?text=1",
      "https://placehold.co/400x200.jpg?text=2",
      "https://placehold.co/400x200.jpg?text=3",
      "https://placehold.co/400x200.jpg?text=4",
      "https://placehold.co/400x200.jpg?text=5",
      "https://placehold.co/400x200.jpg?text=6",
    ],
  },
  {
    id: 3,
    name: "Smart Fitness Tracker",
    description:
      "Stay motivated and track your workouts with this advanced fitness tracker.",
    price: 129.99,
    isInStock: true,
    imageUrls: [
      "https://placehold.co/400x200.jpg?text=1",
      "https://placehold.co/400x200.jpg?text=2",
      "https://placehold.co/400x200.jpg?text=3",
      "https://placehold.co/400x200.jpg?text=4",
      "https://placehold.co/400x200.jpg?text=5",
      "https://placehold.co/400x200.jpg?text=6",
    ],
  },
  {
    id: 4,
    name: "Craft Beer Brewing Kit",
    description:
      "Brew your own delicious craft beer at home with this easy-to-use brewing kit.",
    price: 59.99,
    isInStock: false,
    imageUrls: [
      "https://placehold.co/400x200.jpg?text=1",
      "https://placehold.co/400x200.jpg?text=2",
      "https://placehold.co/400x200.jpg?text=3",
      "https://placehold.co/400x200.jpg?text=4",
      "https://placehold.co/400x200.jpg?text=5",
      "https://placehold.co/400x200.jpg?text=6",
    ],
  },
  {
    id: 5,
    name: "Leather Messenger Bag",
    description:
      "Stay organized and stylish on the go with this classic leather messenger bag.",
    price: 149.99,
    isInStock: true,
    imageUrls: [
      "https://placehold.co/400x200.jpg?text=1",
      "https://placehold.co/400x200.jpg?text=2",
      "https://placehold.co/400x200.jpg?text=3",
      "https://placehold.co/400x200.jpg?text=4",
      "https://placehold.co/400x200.jpg?text=5",
      "https://placehold.co/400x200.jpg?text=6",
    ],
  },
  {
    id: 6,
    name: "Gourmet Coffee Subscription",
    description:
      "Wake up to premium coffee beans delivered to your door every month.",
    price: 19.99,
    isInStock: true,
    imageUrls: [
      "https://placehold.co/400x200.jpg?text=1",
      "https://placehold.co/400x200.jpg?text=2",
      "https://placehold.co/400x200.jpg?text=3",
      "https://placehold.co/400x200.jpg?text=4",
      "https://placehold.co/400x200.jpg?text=5",
      "https://placehold.co/400x200.jpg?text=6",
    ],
  },
  {
    id: 7,
    name: "Vintage Vinyl Record Player",
    description:
      "Rediscover the warm sound of vinyl with this retro-inspired record player.",
    price: 199.99,
    isInStock: true,
    imageUrls: [
      "https://placehold.co/400x200.jpg?text=1",
      "https://placehold.co/400x200.jpg?text=2",
      "https://placehold.co/400x200.jpg?text=3",
      "https://placehold.co/400x200.jpg?text=4",
      "https://placehold.co/400x200.jpg?text=5",
      "https://placehold.co/400x200.jpg?text=6",
    ],
  },
  {
    id: 8,
    name: "Portable Espresso Maker",
    description:
      "Enjoy a perfect shot of espresso anywhere with this compact and portable espresso maker.",
    price: 49.99,
    isInStock: true,
    imageUrls: [
      "https://placehold.co/400x200.jpg?text=1",
      "https://placehold.co/400x200.jpg?text=2",
      "https://placehold.co/400x200.jpg?text=3",
      "https://placehold.co/400x200.jpg?text=4",
      "https://placehold.co/400x200.jpg?text=5",
      "https://placehold.co/400x200.jpg?text=6",
    ],
  },
  {
    id: 9,
    name: "Yoga Mat and Accessories Set",
    description:
      "Find your zen with this complete yoga kit including mat, blocks, and strap.",
    price: 39.99,
    isInStock: true,
    imageUrls: [
      "https://placehold.co/400x200.jpg?text=1",
      "https://placehold.co/400x200.jpg?text=2",
      "https://placehold.co/400x200.jpg?text=3",
      "https://placehold.co/400x200.jpg?text=4",
      "https://placehold.co/400x200.jpg?text=5",
      "https://placehold.co/400x200.jpg?text=6",
    ],
  },
  {
    id: 10,
    name: "Stylish Sunglasses",
    description:
      "Protect your eyes in style with these fashionable and UV-blocking sunglasses.",
    price: 29.99,
    isInStock: false,
    imageUrls: [
      "https://placehold.co/400x200.jpg?text=1",
      "https://placehold.co/400x200.jpg?text=2",
      "https://placehold.co/400x200.jpg?text=3",
      "https://placehold.co/400x200.jpg?text=4",
      "https://placehold.co/400x200.jpg?text=5",
      "https://placehold.co/400x200.jpg?text=6",
    ],
  },
];
