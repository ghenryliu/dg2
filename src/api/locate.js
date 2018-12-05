import request from './request'   //

export function inputcarno(data) {

  return request({
    url:'carnopay_inputcarno',
    method:'post',
    params:data
  })
}


