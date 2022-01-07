import { produce } from 'immer'
import { parseJsonByString } from '../../../../common/utils'
import { 
  CHANGE_SHCEMA, 
  ADD_PAGE_CHILDREN, 
  CHANGE_PAGE_CHILD, 
  REMOVE_PAGE_CHILD,
  CHANGE_PAGE_CHILE_POSITION
 } from './constant'

const initialSchema = parseJsonByString(window.localStorage.schema, {
  name: 'Page',
  attributes: {},
  children: []
})

const defaultState = {
  schema: initialSchema
}

const reducer = (state = defaultState, action) => produce(state, (draft) => {
  switch(action.type) {
    case CHANGE_SHCEMA:
      draft.schema = action.value
      break
    case ADD_PAGE_CHILDREN:
      draft.schema.children.push(action.value)
      break
    case CHANGE_PAGE_CHILD:
      draft.schema.children[action.index] = action.value
      break
    case REMOVE_PAGE_CHILD:
      draft.schema.children.splice(action.index, 1)
      break
    case CHANGE_PAGE_CHILE_POSITION:
      [draft.schema.children[action.oldIndex],draft.schema.children[action.newIndex]] = [draft.schema.children[action.newIndex],draft.schema.children[action.oldIndex]]
      break
    default:
      break
  }
})

export default reducer