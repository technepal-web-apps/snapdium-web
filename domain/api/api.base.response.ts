export interface BaseResponseDto<T = any> {
  data: T
  status?: boolean
  message?: string
}