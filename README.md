# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


website name: MyCharm
live-link:

**Clickable Brand Cards:** Each brand card in the Card component is clickable and redirects the user to a specific route, allowing them to view all products associated with the selected brand.

**Brand Addition Functionality:** The Card component includes functionality to add new brands, allowing users to submit brand information such as name and image to the server via a form.

**Cart Item Deletion:** The CartItems component enables users to delete specific items from the cart by clicking the "Delete" button. This functionality is implemented with a confirmation popup using the SweetAlert2 library.

**Dynamic Cart Rendering:** The MyCart component dynamically renders cart items fetched from a server, displaying each item's relevant details, including the image, name, brand, type, and price, in a visually appealing format.

**Authentication Methods:** The Login component allows users to authenticate using both email/password and Google sign-in. Users can choose their preferred method for logging into the application, enhancing accessibility and user convenience.