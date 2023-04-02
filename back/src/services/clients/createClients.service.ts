import myDataSource from "../../data-source";
import Clients from "../../entities/clients.entity";
import AppError from "../../errors/appError";
import { IClient, IClientRequest } from "../../interfaces/clients.interfaces";
import { clientRequestSerializer, clientToReturnSerializer } from "../../serializers/clients.serializers";

const createClientService = async (clientData: IClientRequest) => {
    const clientRepo = myDataSource.getRepository(Clients)

    const serializedData: IClientRequest  = await clientRequestSerializer.validate(clientData, {
        stripUnknown: true,
        abortEarly: false
    })
    .catch(err => {
        throw new AppError(404, err.errors)
    })

    const createdClient = clientRepo.create({...serializedData} as Object)

    await clientRepo.save(createdClient)

    const serializedReturn = await clientToReturnSerializer.validate(createdClient, {
        stripUnknown: true
    })

    return serializedReturn
}

export default createClientService