const joi = require('joi')

const validatorViajes = (req, res, next) => {

    const schema = joi.object({
        direccionPartida: joi.string().min(3).trim().required().messages({
            'string.empty':'La direccion de partida es requerida',
            'string.min':'La direccion de partida debe tener al menos 3 caracteres',
            "string.alphanum" : "La direccion de partida solo puede contener letras o numeros"
        }),
        direccionDestino: joi.string().min(3).trim().required().messages({
            'string.empty':'La direccion de destino es requerida',
            'string.min':'La direccion de destino debe tener al menos 3 caracteres',
            "string.alphanum" : "La direccion de destino solo puede contener letras o numeros"
        }),
        medioTransporte: joi.string().trim().required().messages({
            'string.empty':'El medio de transporte es requerido',
        }),
        distancia: joi.number().min(0).required().messages({
            'string.empty':'La distancia es requerida',
        }),
        nombresTrabajadores : joi.array().items(joi.string().trim().message({
            "string.alphanum" : "Los nombres de los trabajadores solo pueden contener letras "
        })).required(),
        nombreRegistro : joi.string().min(3).trim().required().messages({
            'string.empty':'El nombre del trabajador que registra el viaje es requerido',
            'string.min':'El nombre del trabajador que registra debe tener al menos 3 caracteres',
        }),
        soloIda : joi.boolean().required(),
        usuario : joi.required(),
        factorEmision : joi.required(),
        fecha : joi.required(),
    })
    const validate = schema.validate(req.body, { abortEarly: true })
    if(validate.error) {
        return res.json( { success: false, response: validate.error.details ,error:true} )
    }
    next()
}

module.exports = validatorViajes 