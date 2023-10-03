import CommonRequest from "../../commonRequest.type";

export default interface GetNote extends CommonRequest<any, { id: number }> {}
