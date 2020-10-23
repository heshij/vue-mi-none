import request from '@/common/js/request'

export function fetchList(query) {
  return request({
    url: '/vue-mi-note/note/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-mi-note/note/detail',
    method: 'get',
    params: { id }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-mi-note/note/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-mi-note/note/update',
    method: 'post',
    data
  })
}
