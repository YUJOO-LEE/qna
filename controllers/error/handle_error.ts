import { NextApiResponse } from 'next';
import CustomServerError from './custom_server_error';

const handleError = (err: unknown, res: NextApiResponse) => {
  let unknownErr = err;
  if (!(err instanceof CustomServerError)) {
    unknownErr = new CustomServerError({ statusCode: 499, message: 'unknown error' });
  }

  const customError = unknownErr as CustomServerError;
  res
    .status(customError.statusCode)
    .setHeader('location', customError.location ?? '')
    .send(customError.serializeErrors()); // 에러 응답에 body 전달
};

export default handleError;
