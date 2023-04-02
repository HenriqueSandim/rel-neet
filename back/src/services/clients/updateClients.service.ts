
import myDataSource from "../../data-source";
import { clientToReturnSerializer, clientUpdateSerializer } from "../../serializers/clients.serializers";

import { IClient, IClientRequest } from "../../interfaces/clients.interfaces";
import Clients from "../../entities/clients.entity";

const updateClientService = async (clientData: IClient, updatedData: Partial<IClientRequest>) => {
    const clientRepo = myDataSource.getRepository(Clients)

    const serializedClientData = await clientUpdateSerializer.validate(updatedData, {
        stripUnknown: true
    })

    const updatedClient = {
        ...clientData,
        ...serializedClientData
    }

    await clientRepo.save(updatedClient as object)

    const serializedReturn = await clientToReturnSerializer.validate(updatedClient, {
        stripUnknown: true
    })

    return serializedReturn
}

export default updateClientService