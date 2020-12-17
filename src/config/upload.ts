import multer from "multer";
// uma forma relativa de fazer caminha na nossa aplicação
import path from "path";
import { request } from "http";
import { response } from "express";

export default {
  //  diskStorage para armazernar as imgages no disco
  // recebe 2 arquivo pra onde vai ser jogado as images
  storage: multer.diskStorage({
    destination: path.join(__dirname, "..", "..", "uploads"),
    //  função que recebe requete, o arquivo e um callbcke
    //  da um nome no nosso arquivo, o arquivo não é baixado com o mesmo nome
    //
    filename: (request, file, cb) => {
      // novo nome do arquivo- (date.now)-> retorna a reprensentação da data atual
      const fileName = `${Date.now()}-${file.originalname}`;

      cb(null, fileName);
    },
  }),
};
