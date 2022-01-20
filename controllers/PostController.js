const { Post, Comment } = require ('../models')

const getAllPosts = async (req, res) => {
    try {
      const posts = await Post.findAll()
      res.send(posts)
    } catch (error) {
        throw error;
    }
  }

const getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id)
    res.send(post)
  } catch (error) {
      throw error
  }
}

const getPostComments = async (req, res) => {
  try {
    let id = req.params.id;
    const comments = await Comment.findAll({
      where: { postId: id },
      // include: [
      //   {
      //     model: Post,
      //     required: true,
      //     attributes: ['title', 'postbody']
      //   }
      // ]
    })
    res.send(comments);
  } catch (error) {
    throw error
  }
}


const createPost = async (req, res) => {
  try {
    const postBody = (req.body)
    let post = await Post.create(postBody)
    res.send(post)
  } catch (error) {
      throw error
  }
}

const updatePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.id)
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
    let postId = parseInt(req.params.id)
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
    getPostComments,
    createPost,
    updatePost,
    deletePost
}
