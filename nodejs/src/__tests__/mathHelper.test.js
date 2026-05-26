// mathHelper.test.js

const {
  add,
  subtract,
  divide,
  multiplica
} = require('../mathHelper');

describe('mathHelper', () => {

  describe('add()', () => {

    it('suma dos números positivos correctamente', () => {
      // Arrange
      const a = 2;
      const b = 3;

      // Act
      const result = add(a, b);

      // Assert
      expect(result).toBe(5);
    });

  });

  describe('subtract()', () => {

    it('resta dos números correctamente', () => {
      // Arrange
      const a = 10;
      const b = 4;

      // Act
      const result = subtract(a, b);

      // Assert
      expect(result).toBe(6);
    });

    it('resta números negativos', () => {
      // Arrange
      const a = -5;
      const b = -2;

      // Act
      const result = subtract(a, b);

      // Assert
      expect(result).toBe(-3);
    });

  });

  describe('divide()', () => {

    it('devuelve el cociente correcto', () => {
      // Arrange
      const a = 10;
      const b = 2;

      // Act
      const result = divide(a, b);

      // Assert
      expect(result).toBe(5);
    });

    it('lanza error al dividir entre cero', () => {
      // Arrange
      const a = 5;
      const b = 0;

      // Act & Assert
      expect(() => divide(a, b)).toThrow(
        'No se puede dividir entre cero.'
      );
    });

  });

  describe('multiplica()', () => {

    it('multiplica dos números correctamente', () => {
      // Arrange
      const a = 4;
      const b = 5;

      // Act
      const result = multiplica(a, b);

      // Assert
      expect(result).toBe(20);
    });

    it('multiplica por cero', () => {
      // Arrange
      const a = 7;
      const b = 0;

      // Act
      const result = multiplica(a, b);

      // Assert
      expect(result).toBe(0);
    });

  });

});