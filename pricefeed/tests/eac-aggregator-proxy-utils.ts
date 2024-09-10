import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AnswerUpdated,
  NewRound,
  OwnershipTransferRequested,
  OwnershipTransferred
} from "../generated/EACAggregatorProxy/EACAggregatorProxy"

export function createAnswerUpdatedEvent(
  current: BigInt,
  roundId: BigInt,
  updatedAt: BigInt
): AnswerUpdated {
  let answerUpdatedEvent = changetype<AnswerUpdated>(newMockEvent())

  answerUpdatedEvent.parameters = new Array()

  answerUpdatedEvent.parameters.push(
    new ethereum.EventParam("current", ethereum.Value.fromSignedBigInt(current))
  )
  answerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )
  answerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "updatedAt",
      ethereum.Value.fromUnsignedBigInt(updatedAt)
    )
  )

  return answerUpdatedEvent
}

export function createNewRoundEvent(
  roundId: BigInt,
  startedBy: Address,
  startedAt: BigInt
): NewRound {
  let newRoundEvent = changetype<NewRound>(newMockEvent())

  newRoundEvent.parameters = new Array()

  newRoundEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )
  newRoundEvent.parameters.push(
    new ethereum.EventParam("startedBy", ethereum.Value.fromAddress(startedBy))
  )
  newRoundEvent.parameters.push(
    new ethereum.EventParam(
      "startedAt",
      ethereum.Value.fromUnsignedBigInt(startedAt)
    )
  )

  return newRoundEvent
}

export function createOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent = changetype<OwnershipTransferRequested>(
    newMockEvent()
  )

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferRequestedEvent
}

export function createOwnershipTransferredEvent(
  from: Address,
  to: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferredEvent
}
