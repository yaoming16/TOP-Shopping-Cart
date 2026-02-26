# TOP Shopping Cart

A modern, responsive e-commerce shopping cart application built with React as part of The Odin Project curriculum.

**[Live Preview](https://top-shopping-cart-dg9.pages.dev/)**

## Features

- **Product Catalog**: Browse products fetched from the DummyJSON API with category filtering
- **Shopping Cart**: Add, remove, and adjust quantities of items
- **Product Details**: View detailed product information in an accessible modal
- **Persistent Cart**: Cart data is saved to session storage
- **Toast Notifications**: Visual feedback for cart operations
- **Responsive Design**: Mobile-first design with full tablet and desktop support
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, and screen reader support

## Technologies

- **React** - UI library
- **React Router** - Client-side routing
- **CSS Modules** - Scoped styling
- **DummyJSON API** - Product data
- **Vite** - Build tool and dev server

## Key Components

### Cart Management

- **CartContext**: Provides cart state and actions via React Context
- **cartReducer**: Immutable cart state updates (add/remove items, update quantities)
- **CartCard**: Individual cart item with quantity controls

### Product Display

- **ItemCard**: Product preview card with quick-add functionality
- **Modal**: Detailed product view with image carousel, reviews, and specifications
- **Carousel**: Image slider for products with multiple photos
- **Accordion**: Collapsible sections for reviews and details

### UI Elements

- **ConfirmationToast**: Animated notifications for cart actions
- **Button**: Reusable button component with variants
- **NavBar**: Responsive navigation with cart item count

## Usage

1. **Browse Products**: Navigate to the Shop page to view all products
2. **Filter by Category**: Use the sidebar to filter products by category
3. **View Details**: Click on a product card to open the detailed modal
4. **Add to Cart**: Select quantity and click "Add to Cart"
5. **Manage Cart**: Visit the Cart page to adjust quantities or remove items
6. **Checkout**: Review your order summary

## API

This project uses the [DummyJSON API](https://dummyjson.com/):

- `GET /products` - Fetch all products
- `GET /products/categories` - Fetch category list
- `GET /products/category/:slug` - Fetch products by category

## Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) for the curriculum
- [DummyJSON](https://dummyjson.com/) for the product API

Built with ❤️ as part of The Odin Project
