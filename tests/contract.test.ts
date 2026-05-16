import { describe, it, expect } from 'vitest';
import { buildReadOnlyUrl, describeContract } from '../src/contract';

const CONTRACT = {
  address: 'SP20Z3WPE6PVN1B8APDQNDH5BR1AJNMR25QPCSGFT',
  name: 'emoji-react',
};

describe('buildReadOnlyUrl', () => {
  it('targets mainnet by default', () => {
    const url = buildReadOnlyUrl({ contract: CONTRACT, functionName: 'get-reaction' });
    expect(url).toContain('api.mainnet.hiro.so');
    expect(url).toContain('emoji-react/get-reaction');
  });
  it('targets testnet when requested', () => {
    const url = buildReadOnlyUrl({
      contract: CONTRACT,
      functionName: 'get-reaction',
      network: 'testnet',
    });
    expect(url).toContain('api.testnet.hiro.so');
  });
  it('rejects invalid address', () => {
    expect(() =>
      buildReadOnlyUrl({ contract: { address: 'x', name: 'y' }, functionName: 'f' })
    ).toThrow(/Invalid contract address/);
  });
});

describe('describeContract', () => {
  it('produces a readable description', () => {
    const desc = describeContract(CONTRACT);
    expect(desc).toContain('Stacks contract');
    expect(desc).toContain('emoji-react');
  });
});
