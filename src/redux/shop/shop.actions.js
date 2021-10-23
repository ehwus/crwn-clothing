import ShopActionTypes from "./shop.types";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMsg) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMsg,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());
    const collectionRef = firestore.collection("collections");

    collectionRef
      .get()
      .then((snapshot) => {
        dispatch(
          fetchCollectionsSuccess(convertCollectionsSnapshotToMap(snapshot))
        );
      })
      .catch((e) => dispatch(fetchCollectionsFailure(e.message)));
  };
};
