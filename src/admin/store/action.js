import { 
  CHANGE_SHCEMA, 
  ADD_PAGE_CHILDREN, 
  CHANGE_PAGE_CHILD, 
  REMOVE_PAGE_CHILD, 
  CHANGE_PAGE_CHILE_POSITION,
  CHANGE_PAGE_ATTRIBUTE 
} from './constant'

export const getChangeSchemaAction = (schema) => {
  return {
    type: CHANGE_SHCEMA,
    value: schema
  }
}

export const getChangePageAttributeAction = (key, value) => {
  return {
    type: CHANGE_PAGE_ATTRIBUTE,
    key,
    value
  }
}

export const getAddPageChildrenAction = () => {
  return {
    type: ADD_PAGE_CHILDREN,
    value: {}
  }
}

export const getChangePageChildAction = (index, value) => {
  return {
    type: CHANGE_PAGE_CHILD,
    index,
    value
  }
}

export const getRemovePageChildAction = (index) => {
  return {
    type: REMOVE_PAGE_CHILD,
    index
  }
}

export const getChangePageChildPositionAction = (oldIndex, newIndex) => {
  return {
    type: CHANGE_PAGE_CHILE_POSITION,
    oldIndex, 
    newIndex
  }
}