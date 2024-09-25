import { INodeProperties } from 'n8n-workflow'

import * as recallMessagesInBatches from './recall-messages-in-batches'
import * as queryTheNumberOfUsersToWhomABatchMessageIsPushedAndTheNumberOfUsersWhoHaveReadTheBatchMessage from './query-the-number-of-users-to-whom-a-batch-message-is-pushed-and-the-number-of-users-who-have-read-the-batch-message'
import * as queriesTheOverallProgressOfABatchMessage from './queries-the-overall-progress-of-a-batch-message'

export const name = 'Message  Batch Message'

export const properties: INodeProperties[] = [
  ...recallMessagesInBatches.properties,
  ...queryTheNumberOfUsersToWhomABatchMessageIsPushedAndTheNumberOfUsersWhoHaveReadTheBatchMessage.properties,
  ...queriesTheOverallProgressOfABatchMessage.properties,
]
