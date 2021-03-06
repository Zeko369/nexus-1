import './__typegen'
import { objectType, queryType, unionType } from '../../../../src'

export const Query = queryType({
  definition(t) {
    t.field('union', {
      type: UnionType,
      resolve() {
        return { name: 'string' }
      },
    })
  },
})

export const A = objectType({
  name: 'A',
  isTypeOf(source) {
    return 'name' in source
  },
  definition(t) {
    t.string('name')
  },
})

export const B = objectType({
  name: 'B',
  isTypeOf(source) {
    return 'age' in source
  },
  definition(t) {
    t.int('age')
  },
})

export const UnionType = unionType({
  name: 'Union',
  definition(t) {
    t.members(A, B)
  },
})
