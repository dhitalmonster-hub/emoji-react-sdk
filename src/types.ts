export interface ContractIdentifier {
  address: string;
  name: string;
}

export interface Reaction {
  id: number;
  emojiCode: number;
  reactor: string;
  reactedAt: number;
}

export interface TxOptions {
  fee?: number;
  nonce?: number;
  postConditions?: unknown[];
}
