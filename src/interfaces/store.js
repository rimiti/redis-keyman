// @flow
/* eslint-disable no-unused-vars */

interface Store {

  /**
   * @description Begin a transaction
   */
  begin(): Array;

  /**
   * @description End a transaction
   */
  end(transaction: Array, callback: () => void): any;

  /**
   * @description Cleans the whole storage
   */
  clean(callback: () => void): any;

  /**
   * @description Get contents from bucket's key
   */
  get(bucket: string, key: string | number, callback: () => void): any;

  /**
   * @description Get union of contents of the specified keys in each of the specified buckets
   * and returns a mapping of bucket to union
   */
  unions(bucket: Array, keys: Array, callback: () => void): any;

  /**
   * @description Get union of contents of the specified keys in each of the specified buckets
   * and returns a mapping of bucket to union
   */
  union(bucket: string, keys: Array, callback: () => void): any;

  /**
   * @description Add values to a given key inside a bucket
   */
  add(transaction: Array, bucket: string, key: string | number, values: string | number | Array): any;

  /**
   * @description Delete given key(s) at the bucket
   */
  del(transaction: Array, bucket: string, keys: string | Array): any;

  /**
   * @description Removes values from a given key inside a bucket
   */
  remove(transaction: Array, bucket: string, key: string | number, values: string | number | Array): any;
}
