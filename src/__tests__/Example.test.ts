
describe("Example", () => {
  // No primeiro parâmetro descrevemos o teste com o máximo de detalhes possível. 
  it("deve ser possivel somar 2 números", () => {
    // Aqui indicamos o resultado esperado para aquele teste.
    expect(2 + 2).toBe(4);
  })

  it("deve ser possivel somar 2 números", () => {
    // Aqui indicamos o resultado esperado NÂO deve ser igual a 5.
    expect(2 + 2).not.toBe(5);
  })
})