const API_URL = "http://localhost:8080";

export const REGISTER_POST_ENDPOINT = API_URL + "/user/company/create"; //registro usuarios externos
export const LOGIN_POST_ENDPOINT = API_URL + "/login";

export const CAREER_ALL_GET_ENDPOINT = API_URL + "/program/get-all"; //obtener programas academicos
export const ROL_ALL_GET_ENDPOINT = API_URL + "/rol/get-all"; //obtener roles de usuarios

export const USER_DETAIL_POST_ENDPOINT = API_URL + "/user/detail" //obtener el detalle de un usuario
export const USER_LIST_GET_ENDPOINT = API_URL+"/user/list"; //obtener usuarios existentes
export const USER_CREATE_POST_ENDPOINT = API_URL + "/user/create"; //Creacion usuarios internos

export const USER_LIST_TEAM_PROJECT_GET_ENDPOINT = API_URL + "/user/list/project"; //Obtener usuarios para formar el equipo de los proyectos

export const PROPOSAL_LIST_GET_ENDPOINT = API_URL + "/project/list" //Obtener la lista de proyectos o propuestas
export const PROPOSAL_LIST_STATUS_APPROVED_REJECTED_GET_ENDPOINT = API_URL + "/project/list-projects"//Obtener la lista de proyectos o propuestas RECHAZADAS o APROBADAS
export const PROPOSAL_CREATE_POST_ENDPOINT = API_URL + "/project/create" //Creacion de un propuesta de proyecto
export const  PROPOSAL_DETAIL_GET_ENDPOINT = API_URL + "/project/detail" //Obtener detalle de proyecto
export const  PROPOSAL_EDIT_POST_ENDPOINT = API_URL + "/project/edit" //Editar propuesta de proyecto
export const  PROPOSAL_UPDATE_STATES_POST_ENDPOINT = API_URL + "/project/update/status" //Actualizacion de estado propuesta de proyecto

export const TAGS_LIST_TEAM_PROJECT_GET_ENDPOINT = API_URL + "/project/tag/list" //Obtener la lista de tags

export const PROJECT_USER_LIST_GET_ENDPOINT = API_URL + "/project/user/list" //Obtener listado  de integrantes del equipo de trabajo

export const TASK_PROJECT_CREATE_POST_ENDPOINT = API_URL + "/task/create"