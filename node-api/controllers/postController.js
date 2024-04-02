const models = require('../models')

function save (req,res) {

    const post = {

        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId: 1
    }
    models.Post.create(post)
    .then((result) => {
        
        res.status(200).json({

            message: 'Post Created Successfully',
            post: result
        })
    }).catch((error) => {
        
        res.status(500).json({

            message: 'Something Went Wrong',
            error: error
        })
    });
}



function show (req, res) {

    const id = req.params.id;

    models.Post.findByPk(id)

    .then((result) => {
        
        res.status(200).json(result)
    }).catch((err) => {
        
        res.status(500).json({
            message: 'something went wrong'
        })
    });
}





module.exports = {
    save : save,
    show: show
}