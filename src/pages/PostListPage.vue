<template>
    <div class="post-list-page">
        <h1>포스트 게시글</h1>
        <post-list :posts="posts"/>
    </div>
</template>

<script>
import PostList from '@/components/PostList'
import {mapActions, mapState} from 'vuex'

export default {
    name: 'PostListPage',
    components: {PostList},
    computed: {
        ...mapState(['posts'])
    },
    created () {
        this.fetchPostList()
    },
    methods: {
        ...mapActions(['fetchPostList'])
    }
}
</script>