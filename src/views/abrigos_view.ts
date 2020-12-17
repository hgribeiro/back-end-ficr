import Orphanege from "../models/Abrigos";
import imagesView from "./images_view";
export default {
  render(orphanage: Orphanege) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latidude: orphanage.latidude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      openign_hours: orphanage.openign_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imagesView.renderMany(orphanage.images),
    };
  },
  renderMany(orphanages: Orphanege[]) {
    return orphanages.map((orphanage) => this.render(orphanage));
  },
};

