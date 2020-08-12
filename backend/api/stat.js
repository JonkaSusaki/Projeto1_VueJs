module.exports = app => {
    const Stat = app.mongoose.model('stat', {
        users: Number,
        categories: Number,
        articles: Number,
        createdAt: Date
    })

    const get = (req, res) => {
        Stat.findOne({}, {}, {sort: {'createdAt': -1}})
            .then(stats => {
                const defaultStat = {
                    users: 0,
                    categories: 0,
                    articles: 0
                }
                res.json(stats || defaultStat)
            })
    }

    return {Stat, get}
}