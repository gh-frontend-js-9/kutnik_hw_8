Conditions 1

URL: https://edabit.com/challenge/PKiTjA7SLK99ZZ8GK

Solution:https://www.dropbox.com/s/4fsf4612ji6kw0l/conditions-m-1.png?dl=0

Conditions 2

URL: https://edabit.com/challenge/wNhCHwPXNLJwrTith

Solution: https://www.dropbox.com/s/f43ugdyk0z95cco/conditions-m-2.png?dl=0

Array 1

URL: https://edabit.com/challenge/4aaBNPnFMc3bzR7JR

Solution:https://www.dropbox.com/s/l5tt1r0yg5h1wm4/array-m-1.png?dl=0

Array 2

URL: https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

Solution:

function arrayOfMultiples (num, length) {
	let sum = num;
	for (i =0;i < length;i++) {
		sum += (Array.from([num], x => x * 2));
	}
	return sum;
}