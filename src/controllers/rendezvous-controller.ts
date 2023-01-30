import httpStatus  from "http-status";
import { Response, Request } from "express";
import { SolicitationType } from "@/protocols";
import rendezvousService from "@/services/rendezvous-service/index"

export async function getRendezvous(req: Request, res: Response) {

  try {
    const rendezvous = rendezvousService.getRendezvous();
    
    if(!rendezvous){
      return res.sendStatus(httpStatus.NOT_FOUND)
    }

    return res.status(httpStatus.OK).send(rendezvous);
  
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
  
}

export async function postRendezvous(req: Request, res:Response){

  const solicitation: SolicitationType = req.body

  try {
    if(!solicitation){
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
  
    const isCreate = rendezvousService.postRendezvous(solicitation);

    if(!isCreate){
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
  
    return res.sendStatus(httpStatus.CREATED);

  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
  
}

// export async function getEnrollmentByUser(req: AuthenticatedRequest, res: Response) {
//   const { userId } = req;

//   try {
//     const enrollmentWithAddress = await enrollmentsService.getOneWithAddressByUserId(userId);

//     return res.status(httpStatus.OK).send(enrollmentWithAddress);
//   } catch (error) {
//     return res.sendStatus(httpStatus.NOT_FOUND);
//   }
// }
