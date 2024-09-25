import { INodeProperties } from 'n8n-workflow'

import * as createSubscription from './create-subscription'
import * as getSubscriptionStatus from './get-subscription-status'
import * as updateSubscriptionStatus from './update-subscription-status'

export const name = 'Subscription'

export const properties: INodeProperties[] = [
  ...createSubscription.properties,
  ...getSubscriptionStatus.properties,
  ...updateSubscriptionStatus.properties,
]
