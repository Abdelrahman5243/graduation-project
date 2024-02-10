import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "../features/screen/screenSlice";
import templateReducer from "../features/templateData/templateSlice";
import templateReducer2 from "../features/templateData/templateSlice2";
import templateReducer3 from "../features/templateData/templateSlice3";
import templateReducer4 from "../features/templateData/templateSlice4";
import templateReducer5 from "../features/templateData/templateSlice5";
import templateReducer6 from "../features/templateData/templateSlice6";
import templateReducer7 from "../features/templateData/templateSlice7";
import templateReducer11 from "../features/templateData/templateSlice11";

export const store = configureStore({
  reducer: {
    screen: screenReducer,
    template: templateReducer,
    template2: templateReducer2,
    template3: templateReducer3,
    template4: templateReducer4,
    template5: templateReducer5,
    template6: templateReducer6,
    template7: templateReducer7,
    template11: templateReducer11,
  },
});
