import sum from './index.js'; // Import fungsi sum
import { test } from 'node:test';
import assert from 'node:assert';

// Pengujian dengan input valid (angka positif)
test('Sum of two positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5, '2 + 3 should equal 5');
  assert.strictEqual(sum(10, 20), 30, '10 + 20 should equal 30');
});

// Pengujian dengan input bukan angka
test('Sum with non-numeric inputs', () => {
  assert.strictEqual(sum('2', 3), 0, 'String "2" and 3 should return 0');
  assert.strictEqual(sum(2, '3'), 0, '2 and string "3" should return 0');
  assert.strictEqual(sum('a', 'b'), 0, 'Strings "a" and "b" should return 0');
});

// Pengujian dengan input angka negatif
test('Sum with negative numbers', () => {
  assert.strictEqual(sum(-2, 3), 0, '-2 and 3 should return 0');
  assert.strictEqual(sum(2, -3), 0, '2 and -3 should return 0');
  assert.strictEqual(sum(-2, -3), 0, '-2 and -3 should return 0');
});

// Pengujian dengan kombinasi input valid dan tidak valid
test('Sum with mixed valid and invalid inputs', () => {
  assert.strictEqual(sum(2, null), 0, '2 and null should return 0');
  assert.strictEqual(sum(undefined, 3), 0, 'undefined and 3 should return 0');
  assert.strictEqual(Number.isNaN(sum(NaN, 3)), true, 'NaN and 3 should return NaN');
});
