import myDataSource from "../../data-source"
import Clients from "../../entities/clients.entity"
import { clientToReturnSerializer } from "../../serializers/clients.serializers"

const getClientService = async (clientId: string) => {
    const clientRepo = myDataSource.getRepository(Clients)

    const clientData = await clientRepo.findOne({
        where: {
            id: clientId
        }
    })    

    const serializedUser = await clientToReturnSerializer.validate(clientData, {
        stripUnknown: true
    })

    return serializedUser
}

export default getClientService