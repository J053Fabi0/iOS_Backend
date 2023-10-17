import CommonRequest from "../../commonRequest.type";

export default interface PostNote extends CommonRequest<{ password: string; username: string; name: string }> {}
