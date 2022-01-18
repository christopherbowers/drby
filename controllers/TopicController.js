const { Topic } = require ('../models')

const getAllTopics = async (req, res) => {
    try {
        const res = await Topic.findAll()
        res.send(res)
    } catch (error) {
        throw error;
    }
    }

const getTopicById = async (req, res) => {
    try {
        const res = await Topic.findByPk(req.params.topic_id)
        res.send(res)
    } catch (error) {
        throw error
    }
}


    module.exports = {
        getAllTopics,
        getTopicById
    }