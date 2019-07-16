import { ApolloClient } from 'apollo-client';
//import { createHttpLink } from 'apollo-link-http';
import {createUploadLink} from 'apollo-upload-client' //-> instalar  esta libreria
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { isContext } from 'vm';

const API_URL = "https://backendblog-7pvzldquh.now.sh/"
/*ligorio@devf1.mx prueba*/
// const API_URL = "http://localhost:4000/"

const httpLink = createUploadLink({
    uri: API_URL
});

const authLink = setContext( (_,{headers}) => {
    const token = localStorage.getItem('blogToken');

    const context = {
        headers:{
            ...headers
        }
    }

    if(token) context.headers['authorization'] = `JWT ${token}`;    

    return context;
    
} );

export default new ApolloClient({
    link: authLink.concat(httpLink),
    cache:new InMemoryCache()
});