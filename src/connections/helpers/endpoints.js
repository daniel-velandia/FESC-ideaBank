const API_URL = "http://localhost:8080";

export const REGISTER_POST_ENDPOINT = API_URL + "/user/company/create"; //registro usuarios externos
export const LOGIN_POST_ENDPOINT = API_URL + "/login";

export const CAREER_ALL_GET_ENDPOINT = API_URL + "/program/get-all"; //obtener programas academicos
export const ROL_ALL_GET_ENDPOINT = API_URL + "/rol/get-all"; //obtener roles de usuarios

export const USER_DETAIL_POST_ENDPOINT = API_URL + "/user/detail" //obtener el detalle de un usuario
export const USER_LIST_GET_ENDPOINT = API_URL+"/user/list"; //obtener usuarios existentes
export const USER_CREATE_POST_ENDPOINT = API_URL + "/user/create"; //Creacion usuarios internos

export const PROPOSAL_LIST_GET_ENDPOINT = API_URL + "/project/list" //Creacion de un propuesta de proyecto
export const PROPOSAL_CREATE_POST_ENDPOINT = API_URL + "/project/create" //Creacion de un propuesta de proyecto