import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('uji fungsi sum', () => {
  // Pengujian dengan dua angka positif
  assert.strictEqual(sum(2, 3), 5);

  // Pengujian dengan angka negatif
  assert.strictEqual(sum(-2, 3), 1);

  // Pengujian dengan angka nol
  assert.strictEqual(sum(0, 0), 0);

  // Pengujian dengan angka positif dan negatif
  assert.strictEqual(sum(-2, -3), -5);
});