const Usuario = require('../models/usuario');
const fs = require('fs');
const Medico = require('../models/medico');
const Hospital = require('../models/hospital');

const actualizarImagen = async (tipo, id, nombreArchivo) => {
    let pathViejo = '';
    switch (tipo) {
        case 'medicos':
            try {
                const medico = await Medico.findById(id).exec();

                const pathViejo = './uploads/medicos/' + medico.img; // pathViejo de la imagen si el usuario ya tiene una guardada 
                if (fs.existsSync(pathViejo)) {  // si existe elimina la imagen anterior
                    fs.unlinkSync(pathViejo,(err) => {
                      if (err) {
                          return res.status(500).json({
                              ok: false,
                              mensaje: "Error en path",
                              errors: err
                          });
                      }
                  });
                }

                medico.img = nombreArchivo;
                await medico.save();
                return res.json({
                    ok: true,
                    mensaje: "No es un user por id",
                    user
                });
            } catch (error) {
                console.log({error})
                return res.json({
                    ok: false,
                    mensaje: "No es un medico por id",
                });
            }
            break;

        case 'hospitales':
            try {
                const hospital = await Hospital.findById(id).exec();

                const pathViejo = './uploads/hospitales/' + hospital.img; // pathViejo de la imagen si el usuario ya tiene una guardada 
                if (fs.existsSync(pathViejo)) {  // si existe elimina la imagen anterior
                    fs.unlinkSync(pathViejo,(err) => {
                      if (err) {
                          return res.status(500).json({
                              ok: false,
                              mensaje: "Error en path",
                              errors: err
                          });
                      }
                  });
                }

                hospital.img = nombreArchivo;
                await hospital.save();
                return res.json({
                    ok: true,
                    mensaje: "No es un user por id",
                    user
                });
            } catch (error) {
                console.log({error})
                return res.json({
                    ok: false,
                    mensaje: "No es un hospital por id",
                });
            }

            break;

        case 'usuarios':
            try {
                const usuario = await Usuario.findById(id).exec();

                const pathViejo = './uploads/usuarios/' + usuario.img; // pathViejo de la imagen si el usuario ya tiene una guardada 
                if (fs.existsSync(pathViejo)) {  // si existe elimina la imagen anterior
                    fs.unlinkSync(pathViejo,(err) => {
                      if (err) {
                          return res.status(500).json({
                              ok: false,
                              mensaje: "Error en path",
                              errors: err
                          });
                      }
                  });
                }

                usuario.img = nombreArchivo;
                await usuario.save();
                return res.json({
                    ok: true,
                    mensaje: "No es un user por id",
                    user
                });
            } catch (error) {
                console.log({error})
                return res.json({
                    ok: false,
                    mensaje: "No es un usuario por id",
                });
            }
            break;
    }

}

module.exports = {
    actualizarImagen
}