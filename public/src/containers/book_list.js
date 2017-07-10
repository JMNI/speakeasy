import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'Redux'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}
//grabbing specific info from redux store 
function mapStateToProps(store) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: store.books,
    // activeBook: store.activeBook,
  }
}

//map any action i want defined in this component to affect the store
//dispatch is refering to whole action , when i click on an object i want to return an object created by action to the reducer
// Anything returned from this function will end up as props on BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

// Propmote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
