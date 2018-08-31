import data, {
  conditions,
  damageDeckCore,
  pilots,
  upgrades
} from '.'

const upgradeSlots = [
  "astromech",
  "cannon",
  "configuration",
  "crew",
  "device",
  "force_power",
  "gunner",
  "illicit",
  "missile",
  "modification",
  "sensor",
  "talent",
  "tech",
  "title",
  "torpedo",
  "turret"
]

test('data is not null', () => {
  expect(data).toBeDefined()
})

// conditions
test('data contains conditions', () => {
  expect(data.conditions).toBeDefined()
})

test('conditions can be imported individually', () => {
  expect(conditions).toBeDefined()
})

test('conditions has items', () => {
  expect(conditions.length).toBeGreaterThan(0)
})

// damageDeckCore
test('data contains damageDeckCore', () => {
  expect(data.damageDeckCore).toBeDefined()
})

test('damageDeckCore can be imported individually', () => {
  expect(damageDeckCore).toBeDefined()
})

test('damageDeckCore has cards', () => {
  expect(damageDeckCore.cards).toBeDefined()
})

test('damageDeckCore.cards has items', () => {
  expect(damageDeckCore.cards.length).toBeGreaterThan(0)
})

// pilots
test('data contains pilots', () => {
  expect(data.pilots).toBeDefined()
})

test('pilots can be imported individually', () => {
  expect(pilots).toBeDefined()
})

test('pilots has items', () => {
  expect(pilots.length).toBeGreaterThan(0)
})

// upgrades
test('data contains upgrades', () => {
  expect(data.upgrades).toBeDefined()
})

test('upgrades can be imported individually', () => {
  expect(upgrades).toBeDefined()
})

test('upgrades has all slots', () => {
  for (let slot of upgradeSlots) {
    expect(upgrades).toHaveProperty(slot);
  }
})

test('upgradeslots has items', () => {
  for (let slot in upgrades) {
    expect(slot.length).toBeGreaterThan(0);
  }
})
