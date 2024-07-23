# Technical assessment for WYA

Thank you for giving me the opportunity to partake in the technical assessment. In this readme, I list important information for your reference, including explanations for decisions at certain points in the code:

### Tech Stack
 
 - React (Vite Typescript Template)
 - TailwindCSS + Shadcn UI (for styling)
 - [PokeAPI](https://pokeapi.co/docs/v2)


 ### Considerations

 - **Fetch vs Axios** : Choose to use the native fetch API instead of a third-party package such as axios, mainly because of the small scale.

 - **Pokemon Search Functionality** : Normally would have opted to implement a debounced search with the changing input, however the pokeAPI does not provide a 'pattern-search' feature, so can't search for pokemon names with that contain certain characters. The search only works if the details for the exact pokemon name are found. Therefore, I have implemented search on button click only. Consequently, each search will always return 0-1 results.

 - **Pagination** : The PokeAPI response provides 'next' and 'previous' properties in the response object, which can be used to implement pagination. On the first page, 'previous' will be null, and on the last page 'next' will be returned as null by the API. Therefore, the 'handleGoToNextPage' and 'handleGoToPreviousPage' methods directly fetch the results of the 'next' and 'previous' properties of the response object.

 - **Context** : Have made use of the React context to ensure state is globally available throughout the app without the and avoiding prop drilling

 - **Testing**: Owing to advised time constraints, I couldn't implement testing for the application, however, I have included a brief explainer below.

 ### How would I test this application:

 1. Testing the list page:

 - The application should load to the list page where all pokemon should be displayed (I've set the limit to 50 at any given time)
 - Ensure that the list is populated with Pokemon names. Clicking on a pokemon name should open the details page for the corresponding pokemon
 - Verify pagination works properly

 2. Testing the pokemon details page:

 - From the list page, click a pokemon name to go to its detail page
 - Check that the different data pieces (image, description, characteristics) are being fetched and rendered properly
 - Verify that the detail page is appropriately updated for each pokemon name

 3. Testing the search functionality:

 - Type a search term in the input box and click the 'Search' button. When the input is empty, verify that the search button is disabled
 - Verify that where the details for the searched pokemon name exist, the appropriate card is rendered on the PokemonList component
 - Where no results are retrieved, a 'No match found' message should be displayed


 ### Potential improvements:

 - Addition of a loading state (and appropriate visuals) during async API calls
 - Addition of a Not Found page for routes that do not exist
 - Search should trigger on pressing the 'Enter' key

 ** *NOTE: Though this is not something I would do in production, I've committed the .env file to Gihub for this project because I wanted to give you everything you would need to run the app* **

 I have also created a short walkthrough video in case you're interested: (Technical assessment walkthrough)[https://youtu.be/uorz_AsUSZA]

 Thank you.
