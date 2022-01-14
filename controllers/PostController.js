const { Post } = require ('../models')

const getAllPosts = async (req, res) => {
    try {
        const res = await Post.findAll()
        res.send(res)
    } catch (error) {
        throw error;
    }
    }

const getPostById = async (req, res) => {
    try {
        const res = await Post.findByPk(req.params.topic_id)
        res.send(res)
    } catch (error) {
        throw error
    }
}

const createPost = async (req, res) => {
    try {
        let userId = parseInt(req.params.user_id)
        let postBody = {
            userId,
            ...req.body
        }
        let post = await Post.create(postBody)
        res.send(post)
    } catch (error) {
        throw error
    }
}

const updatePost = async (req, res) => {
    try {
        let postId = parseInt(req.params.post_id)
        let updatedPost = await Post.update(req.body, { 
            where: { id: postId },
            returning: true
        })
        res.send(updatedPost)
    } catch (error) {
        throw error
    }
}

const deletePost = async (req, res) => {
    try {
        let postId = parseInt(req.params.post_id)
        await Post.destroy({ where: { id: postId } })
        res.send({ message: `Deleted post with an id of ${postId}` })
    }
    catch (error) {
    throw error
    }
}

    module.exports = {
        getAllPosts,
        getPostById,
        createPost,
        updatePost,
        deletePost
    }