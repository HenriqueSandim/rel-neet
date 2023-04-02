import myDataSource from "../../data-source";
import Clients from "../../entities/clients.entity";
import { IClient } from "../../interfaces/clients.interfaces";

const deleteClientService = async (clientData: IClient): Promise<void> => {
    const clientRepo = myDataSource.getRepository(Clients)

    await clientRepo.delete({ id: clientData.id })
}

export default deleteClientService