import {removeDuplicates} from '../29_remove-duplicates/remove-duplicates';

export function maxTripletSum(arr) {
  const uniqueSortedArr = removeDuplicates(arr).sort((a, b) => b - a);
  return uniqueSortedArr[0] + uniqueSortedArr[1] + uniqueSortedArr[2];
}
