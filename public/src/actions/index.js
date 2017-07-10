//TODO: ADD all functions that will be used by containers with the following (Potential more) categories

// Event 
// User (friends)
// Message
// Location 


// Template: 
// export function FUNCTION (arg){
//   return {
//     type : 'reducer_switch_key',
//     payload : data_you_want
//   }
// }






export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  console.log('inside of selectBook action creator')
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
