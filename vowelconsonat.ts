export default function productFromString( s_array:string[]) : number {
	//Insert your code here 
	let noVowels = s_array.map(x=>x.replace( /[aeiou]/g, '' ))[0];
  let cnt1: number = 0;
  let cnt2: number = 0;
  let cnt3: number = 0;
  let vowels = /[aeiou]/gi;
  cnt1 = s_array.map( x => x.split('').filter(letter => 'aeiou'.includes(letter)).join('') )[0].length;
  // console.log(cnt1)
  for(let i=0; i< noVowels.length; i++) {
		if( convertLetterToNumber(noVowels[i]) % 2 ==0 ) {
	  	cnt2 +=1;
		} 
		else if( convertLetterToNumber(noVowels[i]) % 2 == 1 ) {
	  	cnt3 +=1;
		}  
	}
	return cnt1 * cnt2 * cnt3
}

function convertLetterToNumber(str: string): number {
  str = str.toUpperCase();
  let out = 0, len = str.length;
  for (let pos = 0; pos < len; pos++) {
    out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
  }
  return out;
}

console.log(productFromString( ["abc"] ) );
console.log(productFromString( ["abcdefgh"] ) );