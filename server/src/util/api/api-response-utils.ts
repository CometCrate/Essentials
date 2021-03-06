import { Response } from 'express';
import { ApiError } from '../../models/api/api-error.model';

export default class ApiResponseUtils {
  public static sendOkResponse(res: Response, data: any) {
    res.status(200).json(data);
  }

  public static sendEmptyOkResponse(res: Response) {
    res.status(204);
  }

  public static sendBadRequestResponse(res: Response, message: string) {
    const apiError: ApiError = {
      message,
    };

    res.status(400).json(apiError);
  }

  public static sendNotFoundResponse(res: Response, message: string) {
    const apiError: ApiError = {
      message,
    };

    res.status(404).json(apiError);
  }

  public static sendInternalErrorResponse(res: Response, message: string) {
    const apiError: ApiError = {
      message,
    };

    res.status(500).json(apiError);
  }
}
