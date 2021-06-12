export default (state = [], action) => {
  let index;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      index=state.findIndex(quote => {return quote.id===action.quoteId} );
      if (index > -1) {
        let upQuote = Object.assign({}, state[index], { votes: state[index].votes + 1 });
        return [...state.slice(0, index), upQuote, ...state.slice(index + 1)];
      }else{
        return state
      }

    case "DOWNVOTE_QUOTE":
      index=state.findIndex(quote => {return quote.id===action.quoteId} );
      if (index > -1) {
        let downQuote = Object.assign({}, state[index], { votes: state[index].votes - 1 });
        if (downQuote.votes < 0 ){
          downQuote.votes = 0;
        } 
        return [...state.slice(0, index), downQuote, ...state.slice(index + 1)];
      }else{
        return state;
      }
    
    default:
      return state;
  }
}