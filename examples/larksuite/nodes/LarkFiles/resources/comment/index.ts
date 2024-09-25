import { INodeProperties } from 'n8n-workflow'

import * as obtainACommentList from './obtain-a-comment-list'
import * as addAComment from './add-a-comment'
import * as obtainAComment from './obtain-a-comment'
import * as solveOrRestoreAComment from './solve-or-restore-a-comment'
import * as updateAReply from './update-a-reply'
import * as deleteAReply from './delete-a-reply'

export const name = 'Comment'

export const properties: INodeProperties[] = [
  ...obtainACommentList.properties,
  ...addAComment.properties,
  ...obtainAComment.properties,
  ...solveOrRestoreAComment.properties,
  ...updateAReply.properties,
  ...deleteAReply.properties,
]
