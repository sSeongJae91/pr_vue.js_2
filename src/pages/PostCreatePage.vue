<template>
    <div class="post-create-page">
        <h3>게시물 작성하기</h3>
        <post-create-form @submit="onSubmit"/>
    </div>
</template>
<script>
import PostCreateForm from '@/components/PostCreateForm'

export default {
    name: 'PostCreatePage',
    components: {PostCreateForm},
    methods: {
        onSubmit (payload) {
            console.log(payload)
        }
    }
}
</script>
<style>
    
</style>