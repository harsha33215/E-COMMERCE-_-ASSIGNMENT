import { Switch, Route } from "wouter";

import Header from "./components/Header.jsx";

import Home from "./Home.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";

import { CartProvider } from "./context/CartContext.jsx"; // Fixed import path
import { Toaster } from "react-hot-toast"; // Added missing import

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/cart" component={Cart} />
      <Route>
        {() => <div>404 - Page Not Found</div>} {/* Fallback route */}
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <Router />
        </main>
        <Footer />
        <Toaster />
      </div>
    </CartProvider>
  );
}

export default App;
