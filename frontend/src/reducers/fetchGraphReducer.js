const initialState = {
  graphData: null,
  intervalData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVED_GRAPH_DATA':
      return {
        ...state,
        err: null,
        graphData: action.payload,
        graphParams: action.graphParams,
      };
    case 'RESET_GRAPH_DATA':
      return { ...state, err: null, graphData: null };
    case 'RECEIVED_GRAPH_ERROR':
      return { ...state, err: action.payload, graphData: null };

    case 'RECEIVED_INTERVAL_DATA':
      return {
        ...state,
        intervalErr: null,
        intervalData: action.payload,
      };
    case 'RESET_INTERVAL_DATA':
      return {
        ...state,
        intervalErr: null,
        intervalData: null,
      };
    case 'RECEIVED_INTERVAL_ERROR':
      return { ...state, intervalErr: action.payload, intervalData: null };

    default:
      break;
  }
  return state;
};
