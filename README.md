## Complete the Formidable Grocery Online Store

## EXERCISE

The goal of this exercise is to complete as many tasks as possible (in order)
while still organizing the code reasonably well, and using good React
development patterns. Don't rush or worry about completing all of the tasks, we're interested in seeing how you implement these features within the given timeframe.

### General Guidelines

- Use default browser styles.
- Focus on functionality.
- Use React's APIs including new context. You are free to use React's documentation to help yourself along the way.
- There are placeholder methods in `context.js` for all the business logic to implement. These methods and the data the app uses is already part of the Context's state provider value.
- `example.gif` shows an example of all the basic requirements working with a sample design. You can use a different design and style it anyway, but functionality is key.
- `styles.css` can be used to add new selectors to style your project.

### Goals

#### Base Goals

- `1.` Add product search to the header bar (`header-bar.js`). Every new character typed should filter the list of products to only include products that contain the string typed in the search input. For example `ppl` would show "Apple." Search should be case insensitive and trim whitespace.

- `2.` The user should be able to add a product to their cart. A button should be added to the Product Tile (`product-tile.js`) that adds that item to the shopping cart state within the app's context. If the same item is added to the cart it can be a separate line item.

- `3.` The shopping cart right panel (`shopping-cart.js`) should show all the items that have been added to the cart.

- `4.` The header bar (`header-bar.js`) should also show the total cost of all the items in the cart to the right of the search input.

- `5.` The user should be able remove an item from their shopping cart in the right panel. This can be a button per item in the shopping cart.

#### Stretch Goals

- `6.` Add buttons in the shopping cart to sort the items by price or alphabetical order.

- `7.` In the shopping cart if an item that already exists in the cart is added again, group it and show quantity. If a grouped item is deleted from the cart, the entire quantity of that item is removed.

- `8.` Add support for users to increase/decrease count of an item from the shopping cart, only fully removing if quantity is 0.
