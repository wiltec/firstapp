import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { ApolloProvider } from 'react-apollo-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import createClient from './mockClient';
import gql from 'graphql-tag';
import Home from '../views/Home';
import PostPreview from '../components/PostPreview';

const ALL_POST = gql`
	query ALLPOST{
		listPosts{
			_id,
			title
		}
	}
    
`

const ALL_POST_MOCK = [
    {
        request:{
            query: ALL_POST
        },
        result:{
            data: {
                listPosts:[
                    {_id:"63234823576", title:"Post 1"},
                    {_id:"63234823577", title:"Post 2"},
                    {_id:"63234823578", title:"Post 3"}
                ]
            }
        }
    }
]

const waitRequest = () => new Promise(resolve => setTimeout(resolve));

describe("<Home />", () => {
    it("Render Works", () => {
        const client = createClient(ALL_POST_MOCK)       

        const component = mount(
            <ApolloProvider client={client}>
                <Router>
                    <Home />
                </Router>
               
            </ApolloProvider>            
        );

        expect(component).toMatchSnapshot();
    })

    it("Render Post works", () => {
        act(() => {
            const testRequest = async () => {
                const client = createClient(ALL_POST_MOCK);
                await waitRequest();
                const component = mount(
                    <ApolloProvider client={client}>
                        <Router>
                            <Home/>
                        </Router>
                    </ApolloProvider>
                );
    
                //expect(component.find('.post-title')).toHaveLength(3);
                expect(component.find(PostPreview)).toHaveLength(3)
                
            }
            testRequest();           
        })
    })
})