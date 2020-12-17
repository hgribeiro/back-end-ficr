import { Request, Response } from "express";
import { getRepository } from "typeorm";
import abrigoView from "../views/abrigos_view";
import Abrigos from "../models/Abrigos";
import * as Yup from "yup";

export default {
  async index(request: Request, response: Response) {
    const abrigosRepository = getRepository(Abrigos);

    const abrigos = await abrigosRepository.find({
      relations: ["images"],
    });

    return response.json(abrigoView.renderMany(abrigos));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const abrigosRepository = getRepository(Abrigos);

    const abrigo = await abrigosRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return response.json(abrigoView.render(orphanage));
  },

  async create(request: Request, response: Response) {
    // console.log(request.body);
    const {
      name,
      latidude,
      longitude,
      about,
      instructions,
      openign_hours,
      open_on_weekends,
    } = request.body;

    const abrigosRepository = getRepository(Abrigos);

    // pegando as imagem (as forçando que é um array de arquivos)
    const requestImages = request.files as Express.Multer.File[];

    // pegorrendo as imagem map cada uma das imagem e retora o objeto
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      name,
      latidude,
      longitude,
      about,
      instructions,
      openign_hours,
      open_on_weekends,
      images,
    };
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latidude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required(),
      instructions: Yup.string().required(),
      openign_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    console.log(data.openign_hours);

    await schema.validate(data, {
      abortEarly: false,
    });

    const abrigo = abrigosRepository.create(data);

    await abrigosRepository.save(abrigo);

    return response.status(201).json(abrigo);
  },
};
