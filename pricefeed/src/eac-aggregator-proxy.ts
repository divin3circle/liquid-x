import {
  AnswerUpdated as AnswerUpdatedEvent,
  NewRound as NewRoundEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/EACAggregatorProxy/EACAggregatorProxy"
import {
  AnswerUpdated,
  NewRound,
  OwnershipTransferRequested,
  OwnershipTransferred,
} from "../generated/schema"

export function handleAnswerUpdated(event: AnswerUpdatedEvent): void {
  let entity = new AnswerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.current = event.params.current
  entity.roundId = event.params.roundId
  entity.updatedAt = event.params.updatedAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewRound(event: NewRoundEvent): void {
  let entity = new NewRound(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.roundId = event.params.roundId
  entity.startedBy = event.params.startedBy
  entity.startedAt = event.params.startedAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent,
): void {
  let entity = new OwnershipTransferRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
