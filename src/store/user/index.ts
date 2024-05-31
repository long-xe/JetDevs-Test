import { reducer } from "./user.slice";
import * as actions from './user.action'

export default {
    reducer,
    ...actions,
}