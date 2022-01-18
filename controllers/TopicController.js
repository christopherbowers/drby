const { Topic } = require ('../models')

const getAllTopics = async (req, res) => {
    try {
        const topic = await Topic.findAll()
        res.send(topic)
    } catch (error) {
        throw error;
    }
    }

const getTopicById = async (req, res) => {
    try {
        const topic = await Topic.findByPk(req.params.id)
        res.send(topic)
    } catch (error) {
        throw error
    }
}


    module.exports = {
        getAllTopics,
        getTopicById
    }