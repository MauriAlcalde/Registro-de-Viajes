const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
        user: joi.string().max(12).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The name must have more than three letters',
            'string.max': 'The name must have less than twelve letters',
            'string.empty':'The name is required',
            'string.pattern.base':'the name can only have letters'
        }),
        password: joi.string().min(8).trim().pattern(new RegExp('^[a-zA-Z0-9]')).required().messages({
            'string.empty' : 'The password is required',
            'string.min': 'The password must have more than three characters',
            'string.pattern.base':'The password can only have letters or numbers' 
        }),
        rol: joi.string()
    })
    const validate = schema.validate(req.body, { abortEarly: false })
    if(validate.error) {
        return res.json( { success: false, response: validate.error.details ,error:true} )
    }
    next()
}

module.exports = validator 