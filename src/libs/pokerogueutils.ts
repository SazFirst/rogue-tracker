import {Nature, getNatureStatMultiplier} from '../pokerogue/data/nature';

import {Stat} from '../pokerogue/data/pokemon-stat';

const natureDescription: Record<Nature, string> = {} as Record<Nature, string>;

// natureDescription 초기화
for (const key in Nature) {
  if (Object.prototype.hasOwnProperty.call(Nature, key)) {
    const value = Nature[key as keyof typeof Nature];
    natureDescription[value] = _getNatureDescription(value);
  }
}

function _getNatureDescription(nature: Nature): string {
  let ret = '(-)';
  let increasedStat = 0;
  let decreasedStat = 0;

  for (const key in Stat) {
    if (Object.prototype.hasOwnProperty.call(Stat, key)) {
      const stat = Stat[key as keyof typeof Stat];

      const multiplier = getNatureStatMultiplier(nature, stat);
      if (multiplier > 1) {
        increasedStat = stat;
      } else if (multiplier < 1) {
        decreasedStat = stat;
      }
    }
  }

  if (increasedStat && decreasedStat) ret = `(+${Stat[increasedStat]}/-${Stat[decreasedStat]})`;
  else if (increasedStat) ret = `(+${Stat[increasedStat]})`;
  else if (decreasedStat) ret = `(-${Stat[decreasedStat]})`;
  return ret;
}

export {natureDescription};
