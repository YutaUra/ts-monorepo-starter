import { hello } from '../src/index'

describe('@yutaura/ts-monorepo-starter-sample', () => {
  it('hello func output "Hello World"', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    hello()
    expect(consoleSpy).toHaveBeenCalledWith('Hello World')
  })
})
