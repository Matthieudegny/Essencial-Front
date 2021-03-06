export const SAVE_DATA_USER = 'SAVE_DATA_USER';
export const SAVE_DATA_VILLAGE = 'SAVE_DATA_VILLAGE';
export const CHANGE_DATA_USER = 'CHANGE_DATA_USER';
export const CHANGE_DATA_VILLAGE = 'CHANGE_DATA_VILLAGE';
export const REQUEST_CHANGE_PROFIL_USER = 'REQUEST_CHANGE_PROFIL_USER'
export const REQUEST_CHANGE_PROFIL_VILLAGE = 'REQUEST_CHANGE_PROFIL_VILLAGE'
export const DELETE_VILLAGE = 'DELETE_VILLAGE'
export const DELETE_USER = 'DELETE_USER'

export const actionSaveInfoUpdateProfileUser = (dataUser, type, id) => ({
  type: SAVE_DATA_USER,
  payload: {
    dataUser,
    type,
    id
  },
});

export const actionSaveInfoUpdateProfileVillage = (dataUser, type) => ({
  type: SAVE_DATA_VILLAGE,
  payload: {
    dataUser,
    type
  },
});

export const actionChangeUpdateProfileUser = (nameInput, valueInput) => ({
    type: CHANGE_DATA_USER,
    payload: {
      nameInput,
      valueInput
    },
});

export const actionChangeUpdateProfileVillage = (nameInput, valueInput) => ({
  type: CHANGE_DATA_VILLAGE,
  payload: {
    nameInput,
    valueInput
  },
});

export const actionRequestChangeProfileUser = (dataUser) => ({
  type: REQUEST_CHANGE_PROFIL_USER,
  payload: {
    dataUser
  },
});

export const actionRequestChangeProfileVillage = (dataUser) => ({
  type: REQUEST_CHANGE_PROFIL_VILLAGE,
  payload: {
    dataUser
  },
});

export const actionDeleteProfileUser = (userId) => ({
  type: DELETE_USER,
  payload: {
    userId
  },
})

export const actionDeleteProfileVillage = (userId) => ({
  type: DELETE_VILLAGE,
  payload: {
    userId
  },
})