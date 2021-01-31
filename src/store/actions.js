import api from '@/api'
import {FETCH_POST_LIST, FETCH_POST, SET_ACCESS_TOKEN, SET_MY_INFO, DESTROY_ACCESS_TOKEN, DESTORY_MY_INFO, UPDATE_COMMENT, EDIT_COMMENT, DELETE_COMMENT} from './mutations-types'

export default {
    fetchPostList ({commit}){
        return api.get('/posts')
            .then(res => {
                commit(FETCH_POST_LIST, res.data)
            })
    },
    fetchPost({commit}, postId){
        return api.get(`/posts/${postId}`)
            .then(res => {
                commit(FETCH_POST, res.data)
            })
    },
    signin ({commit}, payload) {
        const {email, password} = payload

        return api.post('/auth/signin', {email, password})
            .then(res => {
                const {accessToken} = res.data
                commit(SET_ACCESS_TOKEN, accessToken)

                return api.get('/users/me')
            }).then(res => {
                commit(SET_MY_INFO, res.data)
            })
    },
    signinByToken({commit}, token){
        commit(SET_ACCESS_TOKEN, token)

        return api.get('users/me')
                .then(res => {
                    commit(SET_MY_INFO, res.data)
                })
    },
    signout({commit}) {
        commit(DESTROY_ACCESS_TOKEN)
        commit(DESTORY_MY_INFO)
    },
    createComment ({commit, state}, comment) {
        const postId = state.post.id

        return api.post(`/posts/${postId}/comments`, {contents: comment})
                    .then(res => {
                        console.log('aaa')
                        commit(UPDATE_COMMENT, res.data)
                    })
    },
    editComment ({commit, state}, {commentId, comment}) {
        const postId = state.post.id

        return api.put(`/posts/${postId}/comments/${commentId}`, {
            contents: comment
        }).then (res => {
            commit(EDIT_COMMENT, res.data)
        })
    },
    deleteComment ({commit, state}, commentId) {
        const postId = state.post.id

        return api.delete(`/posts/${postId}/comments/${commentId}`)
                    .then(res => {
                        commit(DELETE_COMMENT, commentId)
                    })
    }
}