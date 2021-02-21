import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shopData) => shopData.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectCollectionIsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
