import httpStatus  from "http-status";
// import { AuthenticatedRequest } from "@/middlewares";
// import enrollmentsService from "@/services/enrollments-service";
import { Response, Request } from "express";

export async function controlerTest(req: Request, res: Response) {

  console.log("teste");

  return res.sendStatus(httpStatus.OK)
  
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
