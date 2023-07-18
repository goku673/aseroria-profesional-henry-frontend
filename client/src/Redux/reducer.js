import {
  GET_SERVICES,
  CREATE_SERVICE,
  GET_SERVICE,
  GET_SERVICE_NAME,
  FILTER,
  CLEAR_FILTER,
  ADD_ITEMS,
  GET_TYPE_SERVICES,
  DEL_ONE_SERVICE,
  DEL_ALL,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAN_USER,
  PERSONAL_USER_DATA,
  EDIT_USER,
  REFRESH_USER,
  GET_SERVICES_BY_USER,
  UPDATE_SERVICE,
  ALL_USERS,
  UPDATE_USER,
  POST_COMENTARIO,
  IS_ADMIN,
  DELETE_SERVICE_BY_USER,
  ALL_SERVICES_ADMIN,
  BOUGHT_PRODUCTS,
  ID_REVIEW
} from './actions-types';

const initialState = {
  allActivities: [],
  copyState: [],
  oneActivity: [],
  typeServices: [],
  items: [],
  userData: {},
  isPaymentInitiated: false,
  paymentResult: null,
  isAdmin: false,
  allUsers : [],
  comentario: [],
  userServices: [],
  allServicesAdmin : [],
  myShopping: [],
  idReview: null
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        allActivities: action.payload,
        copyState: action.payload,
      };

    case CREATE_SERVICE:
      return {
        ...state,
        allActivities: [...state.allActivities, action.payload],
        copyState: [...state.copyState, action.payload],
      };

    case GET_SERVICE:
      return {
        ...state,
        oneActivity: action.payload,
      };

    case GET_SERVICE_NAME:
      return {
        ...state,
        copyState: action.payload,
      };

    case FILTER:
      return {
        ...state,
        copyState: action.payload,
      };

    case CLEAR_FILTER:
      return {
        ...state,
        copyState: [...state.allActivities],
      };

    case ADD_ITEMS:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case GET_TYPE_SERVICES:
      return {
        ...state,
        typeServices: action.payload,
      };

    case DEL_ONE_SERVICE:
      const updateItems = state.items.filter((item) => item.id !== action.payload)
      return {
        ...state,
        items: updateItems,
      };

    case DEL_ALL:
      return {
        ...state,
        items: [],
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        userData: {},
      };
    case CLEAN_USER:
      return {
        ...state,
        userData: {},
      };

    case PERSONAL_USER_DATA:
      return {
        ...state,
        userData: action.payload
      };

    case EDIT_USER:
      return {
        ...state,
        userData: action.payload
      };

    case REFRESH_USER:
      return {
        ...state,
        userData: action.payload
      };
    
    case GET_SERVICES_BY_USER:
      return {
        ...state,
        userServices: action.payload
      };

     
    case UPDATE_SERVICE:
      return{
        ...state,
        allActivities: [...state.allActivities, action.payload],
        copyState: [...state.copyState, action.payload],
      } 

    case ALL_USERS:
      return {
        ...state,
        allUsers: action.payload
      }

    case UPDATE_USER:
      return {
        ...state,
        allUsers: state.allUsers.map((user) => user.id === action.payload.id
          ? {...user, ...action.payload}
          : user
        ),
      }

    case POST_COMENTARIO:
      return {
        ...state,
        comentario: [...state.comentario ,action.payload]
      }

      case IS_ADMIN:
        return {
          ...state,
          allUsers: state.allUsers.map((user) => user.id === action.payload.id
          ? {...user, ...action.payload}
          : user
        ),
      }

      case DELETE_SERVICE_BY_USER:
        const updateServices = state.userServices.filter((serv) => serv.id !== action.payload.id)
        return {
          ...state,
          userServices: updateServices
        }

      case ALL_SERVICES_ADMIN:
        return {
          ...state,
          allServicesAdmin: action.payload
        }

      case BOUGHT_PRODUCTS:
        return {
          ...state,
          myShopping: action.payload
        }

      case ID_REVIEW:
        return {
          ...state,
          idReview: action.payload
        }

    default:
      return state;
  };
};

export default rootReducer;
