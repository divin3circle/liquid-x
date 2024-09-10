import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { AnswerUpdated } from "../generated/schema"
import { AnswerUpdated as AnswerUpdatedEvent } from "../generated/EACAggregatorProxy/EACAggregatorProxy"
import { handleAnswerUpdated } from "../src/eac-aggregator-proxy"
import { createAnswerUpdatedEvent } from "./eac-aggregator-proxy-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let current = BigInt.fromI32(234)
    let roundId = BigInt.fromI32(234)
    let updatedAt = BigInt.fromI32(234)
    let newAnswerUpdatedEvent = createAnswerUpdatedEvent(
      current,
      roundId,
      updatedAt
    )
    handleAnswerUpdated(newAnswerUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AnswerUpdated created and stored", () => {
    assert.entityCount("AnswerUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AnswerUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "current",
      "234"
    )
    assert.fieldEquals(
      "AnswerUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "roundId",
      "234"
    )
    assert.fieldEquals(
      "AnswerUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "updatedAt",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
