import { useReducer } from "react";

enum CountActionKind {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    JUMPTO = 'JUMPTO',
    GOTOSTART = 'GOTOSTART',
    GOTOEND = `GOTOEND`
  }

interface action {
  type: CountActionKind;
  payload: number;
}

interface page{
    pageNumber: number;
}

const usePagination = () => {
    
    const changePage = (state: page, action: action) => {
      switch (action.type) {
        case 'INCREMENT':
          return {pageNumber: state.pageNumber};
        case 'DECREMENT':
          return {pageNumber: state.pageNumber};
        case 'JUMPTO':
          return {pageNumber: action.payload};
      }
      return state;
    }
  
    const [state, dispatch] = useReducer(changePage, { pageNumber: 1 });
    
    const INCREMENT = () => {
      dispatch({type: CountActionKind.INCREMENT, payload: state.pageNumber++});
    }

    const DECREMENT = () => {
        dispatch({type: CountActionKind.DECREMENT, payload: state.pageNumber--});
      }

    const JUMPTO = (page: number) => {
        dispatch({type: CountActionKind.JUMPTO, payload: page});
      }

    const GOTOSTART = () => {
        dispatch({type: CountActionKind.GOTOSTART, payload: 1});
  
    }

    const GOTOEND = (page: number) => {
        dispatch({type: CountActionKind.GOTOEND, payload: page});
      }

    return [state, { INCREMENT, DECREMENT, JUMPTO, GOTOSTART, GOTOEND }];
  };

export{
    usePagination
}