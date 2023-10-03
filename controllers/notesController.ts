import handleError from "../utils/handleError";
import GetNote from "../types/api/notes/getNote.type";
import CommonResponse from "../types/commonResponse.type";

const notes = ["Hola", "Mundo"];

export const getNote = ({ query }: GetNote, res: CommonResponse) => {
  try {
    res.send({ note: notes[query.id] || null });
  } catch (e) {
    handleError(res, e);
  }
};
