import { getDataSource } from "src/datasource";
import { Media } from "./entities/media.entity";

const init = async () => {
    return (await getDataSource()).getRepository(Media).extend({
        findByName(mediaName: string) {
            return this.createQueryBuilder("medias")
                .where("medias.mediaName = :mediaName", { mediaName })
                .getMany()
        },
    })
};
export const MediaRepository = init().then((a) => { return a; });