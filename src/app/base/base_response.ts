type PaginationMeta = {
  total: number;
  page: number;
  perPage: number;
  lastPage: number;
};

type JsonResponse<T> = {
  status: "success" | "error";
  message: string;
  data: T;
  metadata?: {
    pagination?: PaginationMeta;
    [key: string]: any;
  };
};

export function successResponse<T>(
  data: T,
  message = "Successfully retrieve data",
  metadata?: {
    pagination?: PaginationMeta;
    [key: string]: any;
  }
): JsonResponse<T> {
  return {
    status: "success",
    message,
    data,
    ...(metadata ? { metadata } : {}),
  };
}
